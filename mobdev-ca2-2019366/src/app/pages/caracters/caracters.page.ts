import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-caracters',
    templateUrl: './caracters.page.html',
    styleUrls: ['./caracters.page.scss'],
})
export class CaractersPage implements OnInit {

    caracters: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.caracters = this.api.getCaracters();
        this.caracters.subscribe(data => {
            console.log('my data', data);
        });
    }

    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
}
