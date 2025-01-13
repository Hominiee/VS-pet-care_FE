import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import BasicLayout from "../components/Layout/BasicLayout";
import Dashboard from "../components/Pages/Dashboard";
import Expenses from "../components/Pages/Expenses";
import Incomes from "../components/Pages/Incomes";
import Customers from "../components/Pages/Customers";
import SelectedCustomer from "../components/Pages/SelectedCustomer";
import Inventory from "../components/Pages/Inventory";
import Calendar from "../components/Pages/Calendar";
import Employees from "../components/Pages/Employees";
import SelectedEmployee from "../components/Pages/SelectedEmployee"
import Login from "../components/Pages/Login";
import TempCusModal from "../components/Pages/TempCusModal";
import TempInventoryModal from "../components/Pages/TempInventoryModal";
import Modal_for_a_New_Employee from "../components/Pages/Modal_for_a_New_Employee";

  
  const routes = createRoutesFromElements(
    <Route path="/">
      <Route
            path="login"
            element={
                <Login />
            }
        />
      <Route element={<BasicLayout />}>
        <Route
            path="dashboard"
            element={
                <Dashboard />
            }
        />
        <Route
            path="customers"
            element={
                <Customers />
            }
        />
        <Route
            path="inventory"
            element={
                <Inventory />
            }
        />
        <Route
            path="employees"
            element={
                <Employees />
            }
        />
        <Route
            path="selectedcustomer"
            element={
                <SelectedCustomer />
            }
        />
        <Route
            path="selectedemployee"
            element={
                <SelectedEmployee />
            }
        />
      </Route>

      <Route element={<BasicLayout searchbar={false} />}>
        <Route
            path="dashboard"
            element={
                <Dashboard />
            }
        />
        <Route
            path="expenses"
            element={
                <Expenses />
            }
        />
        <Route
            path="incomes"
            element={
                <Incomes />
            }
        />
        <Route
            path="Modal_for_a_New_Employee"
            element={
                <Modal_for_a_New_Employee />
            }
        />
    </Route>

    <Route
        path="calendar"
        element={
            <Calendar />
        }
    />
    {/* Temporarily added for testing "Add new customer modal" => (93-98) */}
    <Route
        path="tempcusmodal"
        element={
            <TempCusModal />
        }
    />
    <Route
        path="tempinvmodal"
        element={
            <TempInventoryModal />
        }
    />

  </Route>,
  
);
  
export const Router = createBrowserRouter(routes);
  
  // <Route path="*" element={<Navigate to="/" replace={true} />} />