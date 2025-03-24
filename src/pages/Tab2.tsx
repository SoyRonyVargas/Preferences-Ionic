import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import * as data from '../data.json'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gatos Disponibles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="p-3 mt-4">
          <div className="row">
            {data.gatos.map((gato, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img src={gato.imagen} className="card-img-top" alt={gato.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{gato.nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{gato.raza}</h6>
                    <p className="card-text">{gato.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
