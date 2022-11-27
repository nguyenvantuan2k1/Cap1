import { useContext, createContext, useEffect, useState } from 'react';
import { supabase } from '../config/supabase';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const session = supabase.auth;

    // console.log('session.getSession: ', await session.getSession());

    const c = await session.getSession();

    // console.log(c);
    setCurrentUser(c?.data?.session?.user ?? null);
    setLoading(false);

    // xem lai
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setCurrentUser(session?.user ?? null);
      setLoading(false);
      // await supabase;
      // .from("profiles")
      // .insert([{ id: currentUser.uid, displayName: "", email: currentUser.email, password: currentUser.password }]);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: data => supabase.auth.signUp(data),
    signIn: data => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    currentUser,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
