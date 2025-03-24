import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import * as data from '../data.json';
import './Tab1.css';
import { useAuth } from './AuthContext';

const Tab1: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout()
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perros Disponibles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand="block" onClick={handleLogout} style={{ marginTop: '20px' }}>
          Cerrar sesión
        </IonButton>
        <div className="row p-3">
          {data.perros.map((perro, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={perro.imagen} className="card-img-top" alt={perro.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{perro.nombre}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{perro.raza}</h6>
                  <p className="card-text">{perro.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
