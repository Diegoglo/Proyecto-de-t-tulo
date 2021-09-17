import { IonContent,IonCol, IonGrid, IonPage, IonRow, IonSegment, IonSegmentButton, IonItem, IonLabel, IonInput, IonButton, IonHeader, IonTitle, IonToolbar, IonText } from "@ionic/react";
import React from "react";


const Login: React.FC = ()=>{
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="fondo">
                    <IonTitle color ="tittle" text-uppercase className="ion-text-center">Log In</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="fondo">
                <IonGrid>
                    <IonRow class="ion-padding">
                        <IonCol className="ion-text-center">
                            <IonItem color="fondo">
                                <IonLabel position="floating">User</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding">
                        <IonCol className="ion-text-center">
                            <IonItem color="fondo">
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-padding-vertical">
                        <IonCol className="ion-text-center">
                            <IonButton color="celeste" expand="block" shape="round"><IonText color="light"> Iniciar sesión</IonText></IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonButton color="warning" expand="block" shape="round"><IonText color="light"> Registrate</IonText></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;