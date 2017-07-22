import { Injectable } from '@angular/core';
import {AdministratorsService} from './administration/administrator.service';
import {OrganizationsService} from './organization/organization.service';
import {UsersService} from './users.service';

@Injectable()
export class UtilitiesService {
  objectLength;

  constructor(private administrator:AdministratorsService, private organization:OrganizationsService,
              private user:UsersService
  ) {

   }

   getRole(id){
     return this.administrator.getRoleOfAdministrator() || this.user.getRoleOfUser(id);
   }

}
