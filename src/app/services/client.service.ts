import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IClient } from '../interfaces/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<IClient>;
  clientDoc: AngularFirestoreDocument<IClient>;
  clients: Observable<IClient[]>;
  client: Observable<IClient>;
  constructor(private _afs: AngularFirestore) {
    this.clientsCollection = this._afs.collection('clients', (ref) =>
      ref.orderBy('lastName', 'asc')
    );
  }

  getClients(): Observable<IClient[]> {
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as IClient;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.clients;
  }

  addClient(client: IClient) {
    this.clientsCollection.add(client);
  }
  getClient(id: string): Observable<IClient> {
    this.clientDoc = this._afs.doc<IClient>(`clients/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map((action) => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as IClient;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.client;
  }

  updateClient(client: IClient) {
    this.clientDoc = this._afs.doc(`clients/${client.id}`);
    this.clientDoc.update(client);
  }
}
