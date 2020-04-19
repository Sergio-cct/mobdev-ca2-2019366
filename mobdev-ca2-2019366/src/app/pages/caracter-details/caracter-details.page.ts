import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-caracter-details',
    templateUrl: './caracter-details.page.html',
    styleUrls: ['./caracter-details.page.scss'],
})
export class CaracterDetailsPage implements OnInit {

    character: any;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getCaracter(this.characterId).subscribe(res => {
            this.character = res[0];
        });
    }

}
