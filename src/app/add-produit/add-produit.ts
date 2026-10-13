import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  
})
export class AddProduitComponent {

  newProduit: Produit = new Produit();
  categories! : Categorie[];
  message! : string;
  newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private produitService: ProduitService,
  private router :Router) { }
  ngOnInit() {
  this.categories = this.produitService.listeCategories();
  }
  addProduit() {
  this.newCategorie =
  this.produitService.consulterCategorie(this.newIdCat);
  this.newProduit.categorie = this.newCategorie;
  this.produitService.ajouterProduit(this.newProduit);
  this.router.navigate(['produits']);
  }




}


