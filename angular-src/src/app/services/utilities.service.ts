import { Injectable } from '@angular/core';
import {AdministratorsService} from './administration/administrator.service';
import {OrganizationsService} from './organization/organization.service';

@Injectable()
export class UtilitiesService {
  objectLength;

  constructor(private administrator:AdministratorsService, private organization:OrganizationsService) {

   }

   getRole(){
     return this.administrator.getRoleOfAdministrator() || this.organization.getRoleOfOrganization();
   }

}
