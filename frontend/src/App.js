import './App.css';
import CompaniesSearchBar from './components/cpCompaniesSearchBar';
import { Routes, Route, Red, Navigate } from "react-router-dom";
import CompaniesPage from './components/companies';

const App = () => {
  return (
    <Routes>
      <Route path="/add-company" element={<CompaniesSearchBar />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route
        path="*"
        element={<Navigate to="/add-company" replace />}
      />
    </Routes>

  );
}

export default App;
