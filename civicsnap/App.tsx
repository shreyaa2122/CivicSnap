
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutSection from './components/AboutSection';
import WorkingSection from './components/WorkingSection';
import DepartmentsSection from './components/DepartmentsSection';
import ProfileSection from './components/ProfileSection';
import EmergencySection from './components/EmergencySection';
import ManagementDashboard from './components/ManagementDashboard';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import ReportModal from './components/ReportModal';
import { db } from './firebase';
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  doc, 
  query, 
  orderBy 
} from 'firebase/firestore';

export interface CivicReport {
  id: string; // Readable ID (e.g., #CS-1234)
  docId?: string; // Firestore unique document ID
  category: string;
  description: string;
  location: string;
  severity: 'Low' | 'Medium' | 'High';
  status: 'Reported' | 'Started' | 'In Progress' | 'Done';
  timestamp: string;
  citizenName: string;
  preview?: string;
}

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'home' | 'about' | 'working' | 'departments' | 'profile' | 'emergency' | 'dashboard'>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'citizen' | 'management' | null>(null);
  const [currentUserName, setCurrentUserName] = useState<string>('');
  const [reports, setReports] = useState<CivicReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sync reports with Firestore
  useEffect(() => {
    const q = query(collection(db, 'reports'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reportsData: CivicReport[] = [];
      querySnapshot.forEach((doc) => {
        reportsData.push({ ...doc.data() as CivicReport, docId: doc.id });
      });
      setReports(reportsData);
      setIsLoading(false);
    }, (error) => {
      console.error("Firestore sync error:", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = (role: 'citizen' | 'management', identifier: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentUserName(identifier);
    setIsLoginModalOpen(false);
    if (role === 'management') {
      setActiveView('dashboard');
    } else {
      setActiveView('profile');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentUserName('');
    setActiveView('home');
  };

  const addReport = async (newReport: CivicReport) => {
    try {
      await addDoc(collection(db, 'reports'), newReport);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateReportStatus = async (docId: string, newStatus: CivicReport['status']) => {
    if (!docId) return;
    try {
      const reportRef = doc(db, 'reports', docId);
      await updateDoc(reportRef, {
        status: newStatus
      });
    } catch (e) {
      console.error("Error updating status: ", e);
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onOpenLogin={() => setIsLoginModalOpen(true)} onGoToEmergency={() => setActiveView('emergency')} />;
      case 'about':
        return <AboutSection onOpenLogin={() => setIsLoginModalOpen(true)} />;
      case 'working':
        return <WorkingSection onOpenLogin={() => setIsLoginModalOpen(true)} />;
      case 'departments':
        return <DepartmentsSection onOpenLogin={() => setIsLoginModalOpen(true)} />;
      case 'profile':
        const userReports = reports.filter(r => r.citizenName === currentUserName);
        return <ProfileSection reports={userReports} userName={currentUserName} />;
      case 'emergency':
        return <EmergencySection />;
      case 'dashboard':
        return <ManagementDashboard reports={reports} onUpdateStatus={(id, status) => {
          const report = reports.find(r => r.id === id);
          if (report?.docId) updateReportStatus(report.docId, status);
        }} />;
      default:
        return <HomeView onOpenLogin={() => setIsLoginModalOpen(true)} onGoToEmergency={() => setActiveView('emergency')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500/30 selection:text-amber-500 flex flex-col">
      <Navbar 
        activeView={activeView} 
        onSetView={setActiveView} 
        onOpenLogin={() => setIsLoginModalOpen(true)} 
        onOpenReport={() => setIsReportModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow pt-24">
        {isLoading && activeView !== 'home' ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        ) : renderView()}
      </main>

      <Footer />

      {isLoginModalOpen && (
        <LoginModal 
          onClose={() => setIsLoginModalOpen(false)} 
          onLogin={handleLogin}
        />
      )}
      
      {isReportModalOpen && (
        <ReportModal 
          onClose={() => setIsReportModalOpen(false)} 
          onReportSubmit={addReport}
          defaultCitizenName={currentUserName}
        />
      )}
    </div>
  );
};

export default App;
