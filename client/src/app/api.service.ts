import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guest } from './models';
import { StorageDatabase } from './storage.database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private db:StorageDatabase) { }

  // Methods
  async getData ():Promise<Guest[]> {
    const results:Guest[] = await this.http.get<Guest[]>('http://localhost:3000/api/rsvp').toPromise()
    return results.map(d => {
      return {
        name: d.name,
        email: d.email,
        phone: d.phone,
        status: d.status
      } as Guest
    })
  }

  async postData (data:Object):Promise<any> {
    data['createdBy'] = "1"
    return await this.http.post('http://localhost:3000/api/rsvp', data).toPromise()
  }
}