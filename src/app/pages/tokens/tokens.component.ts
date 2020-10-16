import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss']
})
export class TokensComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.fromQuery(this.router.parseUrl(this.router.url).queryParams as any);
    this.router.navigate(['']);
  }

}
