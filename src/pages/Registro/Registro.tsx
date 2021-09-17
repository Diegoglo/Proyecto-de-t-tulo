import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonText, IonDatetime, IonIcon } from "@ionic/react";
import React from "react";
import { arrowBackOutline, settingsOutline} from 'ionicons/icons';


const Registro: React.FC = () =>{
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar color="fondo">
                    <IonIcon class="ion-padding" color ="medium" slot="start" icon={arrowBackOutline}/>
                    <IonIcon class="ion-padding" color ="medium" slot="end" icon={settingsOutline}/>
                    <IonTitle className="ion-text-center">Registro</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="fondo">
                <IonGrid>
                    <IonRow class="ion-padding">
                        <IonCol className="ion-text-center">
                            <IonItem color="fondo">
                                <IonLabel position="floating">Usuario</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding">
                        <IonCol className="ion-text-center">
                            <IonItem color="fondo">
                                <IonLabel position="floating">Nombre y Apellido</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding">
                        <IonCol className="ion-text-center">
                            <IonItem color="fondo">
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="email"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding">
                        <IonCol className="ion-text-center">
                            <IonItem color="fondo">
                                <IonLabel>Fecha de nacimiento</IonLabel>
                                <IonDatetime  min="1920" max="2017" displayFormat="DD/MM/YYYY"></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding">
                        <IonCol className="ion-text-center">
                            <IonItem color="fondo">
                                <IonLabel position="floating">Contraseña</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding">
                        <IonCol className="ion-text-center">
                            <IonItem color="fondo">
                                <IonLabel position="floating">Confirme contraseña</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding-vertical">
                        <IonCol className="ion-text-center">
                            <IonButton color="celeste" expand="block" shape="round"><IonText color="light"> Finalizar</IonText></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};



export default Registro;