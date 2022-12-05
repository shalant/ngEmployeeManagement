import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Response } from 'src/app/interface/response.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})

export class UserdetailComponent implements OnInit {
  response: Response;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log('User ID:', params.get('uuid')!);
      this.userService.getUser(params.get('uuid')!).subscribe(
        (response: any) => {
          console.log(response);
          this.response = response;
        }
        );
    });
  }
}
