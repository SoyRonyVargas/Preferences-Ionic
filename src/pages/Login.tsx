import { IonButton, IonPage } from '@ionic/react';
import { Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext';

export default function Login() {
  const { login , isAuthenticated } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    await login();
    history.replace('/tab1');
  };

  if( isAuthenticated ) return <Redirect to="/tab1" />
  
  return (
    <IonPage className="ion-padding">
      <IonButton expand="block" onClick={handleLogin}>
        Iniciar Sesión
      </IonButton>
    </IonPage>
  );
}
