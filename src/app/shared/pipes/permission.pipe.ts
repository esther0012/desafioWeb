import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'permissao'
})
export class PermissionPipe implements PipeTransform {

  transform(value: String): String {
    switch (value ){
      case '1' : return  'admin_panel_settings';
      case '2': return 'person';
    }
    return 'admin_panel_settings';
  }

}
