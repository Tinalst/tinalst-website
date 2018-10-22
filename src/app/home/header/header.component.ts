import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
    }
    link2Page = which => {
        switch (which) {
            case 'blob':
                window.open(`https://github.com/Tinalst/Tina-s-Javascript-note`, '_blank');
                break;
            case 'bky':
                window.open(`https://www.cnblogs.com/timetimetime/`, '_blank');
                break;
            case 'resume':
                window.open(`${environment.remoteUrl}/assets/source/林思婷-前端工程师-13058080915.pdf`, '_blank');
                break;
            default :
                // 兼容微信IOS端路由不变BUG处理
                // const _fragment = this.activatedRoute.snapshot.fragment;
                // console.dir(this.router.routerState.snapshot.url);
                document.querySelector(`#${which}`).scrollIntoView();
        }
    }
}
