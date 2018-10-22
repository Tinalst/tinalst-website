import { Component, OnInit } from '@angular/core';
import {WorkModel} from '../../public/model/work.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
    imgsArray: string[] = [
        '/assets/images/pics/client',
        '/assets/images/pics/gq',
        '/assets/images/pics/merchant',
        '/assets/images/pics/yjj'
    ];
    workData: Array<WorkModel> = [
        {
            finish_time: '201806-201810',
            title: '圣托智能点餐B端(已上线)',
            description: [
                '主导项目开发，根据项目原型和需求合理搭建项目前端架构；',
                '基于ionic平台的Hybrid App，采用Flexible、rem解决移动端适配问题。',
                '结合imge-set编写@mixin函数，优化不同设备像素比下背景图片加载次数、根据不同设备设备像素比加载相应像素比下最优背景图',
                '结合<picture>、<source>、srcset、media编写响应式图片组件，优化图片显示',
                '手写SVG实现音量动画效果、话筒图标等，优化应用中的图片加载方式',
                '使用cordova-plugin 调用设备的摄像头、麦克风等，实现与3D人物模型进行语音交互功能' ,
                '实现日历组件，实现日历按月切换，日期选取等功能，支持不同DPR下的设备下的显示' ,
                '通过动态创建组件编写action-sheet组件，实现任意其他组件放入action-sheet都具备动画渐入和淡出的效果'
            ]
        },
        {
            finish_time: '20179-201806',
            title: '广州广电中心机房管理系统 （已投入实际使用）',
            description: [
                '结合Angular特性，处理复杂的业务逻辑场景，通过封装Component、service精简代码量，提高组件的可复用度，降低组件之间的耦合度',
                '使用httpClient与后端进行交互，结合Rxjs、interface、model合理地对response进行处理',
                '基于primeNG提供的UI使用Scss技术编写了一套针对项目的UI',
                '升级项目（从Angular5升级迁移至Angular6n',
                '部分模块的页面、交互、数据对接的实现'
            ]
        },
        {
            finish_time: '201806-201810',
            title: '圣托智能餐厅C端用户点餐（已上线',
            description: [
                '项目以移动端为主的微信网页开发',
                '实现微信网页授权功能',
                '使用微信JS-SDK，访问麦克风，实现根据用户语音结合AI语音识别与3D人物进行语言交互',
                '封装3D人物模型组件，达到通过调用组件动作方法实现3D人物动作切换',
                '结合threejs编写3D外场景，通过使用ES6中的函数参数解构新特性编写控制模型旋转、位置、缩放功能函数大幅度简化代码量',
                '使用懒加载、预加载、异步加载、优化模型加载时间',
                '使用粒子效果实现3D场景中2D标签的显示',
                '根据射线拾取原理在3D场景中实现点击交互效果',
                '基于拖拽指令，实现悬浮球组件'
            ]
        },
        {
            finish_time: '201707-201809',
            title: '北京药监局机房监控系统 （已投入实际使用）',
            description: [
                '负责设备监控页面开发，主要使用SVG编写2.5D大屏监控页面，实现了一套完善的针对机房设备的监控模板，为后期其他项目的开发工期整体缩短50%' ,
                 '处理复杂的业务需求，实现监控平台下实时对空调设备定位式漏水的逻辑代码实现，并写成一个通用的代码文件，缩短项目工期'
            ]
        },
    ]
    constructor() { }

    ngOnInit() {
    }

}
