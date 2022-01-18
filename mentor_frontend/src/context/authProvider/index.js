import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token') ? true : false);
  const [name , setName] = useState('')
  const [email, setEmail] = useState('')
  const [usercategory, setUserCategory] = useState('')
  
  const changeName = (val) => {
    setName(val)
   }
   const changeEmail = (val) => {
    setEmail(val)
   }
   const changeUserCategory = (val) => {
    setUserCategory(val)
   }
  const changeAuth = () => {
    setIsAuth(!isAuth);
  };

  const logOut = () => {
    localStorage.clear()
  }
  return (
    <AuthContext.Provider value={{ isAuth, changeAuth, email, name, usercategory , changeName, changeEmail, changeUserCategory, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}