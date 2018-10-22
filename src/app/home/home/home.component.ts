import { Component, OnInit } from '@angular/core';
declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }
    ngOnInit() {

        // 渲染粒子效果
        this.renderParticles();
    }
    renderParticles = () => {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: !0,
                        value_area: 1200
                    }
                },
            color: {
                value: ['#8F98E4', '#4BC6B9', '#F5AF6F', '#F78DC5']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 7
                },
                image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !0,
                anim: {
                  enable: !0,
                  speed: 1,
                  opacity_min: 0,
                  sync: !1
                }
            },
            size: {
                value: 5,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 4,
                    size_min: .3,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1,
                distance: 150,
                color: '#ffffff',
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 1,
                direction: 'none',
                random: !0,
                straight: !1,
                out_mode: 'out',
                bounce: !1,
                attract: {
                  enable: !1,
                  rotateX: 600,
                  rotateY: 600
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: !0,
                    mode: 'repulse'
                },
                onclick: {
                    enable: !1,
                    mode: 'repulse'
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 377.61590372012546,
                    line_linked: {
                         opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 81.20772123013451,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
            retina_detect: !0
      });
    }

}
