import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-responsive-image',
  template: `
      <style>
          
      </style>
      <picture>
          <source [srcset]="images[0]" media="(-webkit-min-device-pixel-ratio:  3)">
          <source [srcset]="images[1]" media="(-webkit-min-device-pixel-ratio:  2)">
          <img [src]="images[2]" [style.width]="imageWidth">
      </picture>
  `,
  styleUrls: ['./responsive-image.component.scss']
})
/**
 * 使用说明：
 *  功能： 根据不同分辨率加载相应的图片资源
 *  使用方式： <app-responsive-image [imageUrl]="xxxx" [imageWidth]="xxx">
 *      注意： 资源路径只传入截止到文件名@之前
 *      例如： bg.png | bg@2x.png | bg@3x 则之传入路径'bg'
 */
export class ResponsiveImageComponent implements OnInit {
    @Input() imageUrl: string;             // 图片路径（截止到@之前）
    @Input() imageWidth: any = '100%';     // 指定图片显示宽度，高度默认按比例做相应变化
    images: string[] = [];                 // 不同分辨率下的图片资源路径

    constructor() { }

    ngOnInit() {
        this.setImageUrl();
    }

    setImageUrl = (): void => {
        this.images = [
            `${this.imageUrl}@3x.png`,
            `${this.imageUrl}@2x.png`,
            `${this.imageUrl}.png`,
        ];
    };

}
