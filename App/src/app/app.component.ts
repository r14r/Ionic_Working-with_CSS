import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	private MODULE = 'AppComponent';

	public appMenu = [
		{
			'name': 'Apps',
			'items': [
				{ 'name': 'Solar System', 'icon': 'clock', 'url': 'solar-system' },
				{ 'name': 'Calendar', 'icon': 'clock', 'url': 'calendar' },
				{ 'name': 'Chess 3D', 'icon': 'clock', 'url': 'chess-3d' },
				{ 'name': '4', 'icon': 'clock', 'url': 'buttons4' },
				{ 'name': '5', 'icon': 'clock', 'url': 'buttons5' }
			]
		},
		{
			'name': 'Animation',
			'items': [
				{ 'name': 'Blowing Bubbles', 'icon': 'clock', 'url': 'blowing-bubbles' },
				{ 'name': 'Snow', 'icon': 'clock', 'url': 'snow1' },
				{ 'name': '3', 'icon': 'clock', 'url': 'buttons3' },
				{ 'name': '4', 'icon': 'clock', 'url': 'buttons4' },
				{ 'name': '5', 'icon': 'clock', 'url': 'buttons5' }
			]
		},
		{
			'name': 'Animation: Parallax',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'parallax1' },
				{ 'name': '2', 'icon': 'clock', 'url': 'snow1' },
				{ 'name': '3', 'icon': 'clock', 'url': 'buttons3' },
				{ 'name': '4', 'icon': 'clock', 'url': 'buttons4' },
				{ 'name': '5', 'icon': 'clock', 'url': 'buttons5' }
			]
		},
		{
			'name': 'Animation: Movement',
			'items': [
				{ 'name': 'Parallel Park', 'icon': 'clock', 'url': 'parallel-park' },
				{ 'name': '2', 'icon': 'clock', 'url': 'buttons2' },
				{ 'name': '3', 'icon': 'clock', 'url': 'buttons3' },
				{ 'name': '4', 'icon': 'clock', 'url': 'buttons4' },
				{ 'name': '5', 'icon': 'clock', 'url': 'buttons5' }
			]
		},
		{
			'name': 'Buttons',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'buttons1' },
				{ 'name': '2', 'icon': 'clock', 'url': 'buttons2' },
				{ 'name': '3', 'icon': 'clock', 'url': 'buttons3' },
				{ 'name': '4', 'icon': 'clock', 'url': 'buttons4' },
				{ 'name': '5', 'icon': 'clock', 'url': 'buttons5' }
			]
		},
		{
			'name': 'Checkbox',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': '/checkbox1' },
				{ 'name': '2', 'icon': 'clock', 'url': '/checkbox2' },
				{ 'name': '3', 'icon': 'clock', 'url': '/checkbox3' },
				{ 'name': '4', 'icon': 'clock', 'url': '/checkbox4' },
				{ 'name': '5', 'icon': 'clock', 'url': '/checkbox5' },
			]
		},
		{
			'name': 'Hover',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'hover1' },
				{ 'name': '2', 'icon': 'clock', 'url': 'hover2' },
				{ 'name': '3', 'icon': 'clock', 'url': 'hover3' },
				{ 'name': '4', 'icon': 'clock', 'url': 'hover4' },
				{ 'name': '5', 'icon': 'clock', 'url': 'hover5' }
			]
		},
		{
			'name': 'Demo',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': '/demo1' },
				{ 'name': '2', 'icon': 'clock', 'url': '/demo2' },
				{ 'name': '3', 'icon': 'clock', 'url': '/demo3' },
				{ 'name': '4', 'icon': 'clock', 'url': '/demo4' },
				{ 'name': '5', 'icon': 'clock', 'url': '/demo5' }
			]
		},
		{
			'name': 'Gauge',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'gauge1' },
				{ 'name': '2', 'icon': 'clock', 'url': 'gauge2' },
				{ 'name': '3', 'icon': 'clock', 'url': 'gauge3' },
				{ 'name': '4', 'icon': 'clock', 'url': 'gauge4' },
				{ 'name': '5', 'icon': 'clock', 'url': 'gauge5' }
			]
		},
		{
			'name': 'Side Menu: Animated',
			'items': [
				{ 'name': 'Animated 1', 'icon': 'clock', 'url': 'side-menu-animated1' },
				{ 'name': 'Animated 1', 'icon': 'clock', 'url': 'side-menu-animated2' }
			]
		},
		{
			'name': 'Side Menu: Circular',
			'items': [
				{ 'name': 'Circular 1', 'icon': 'clock', 'url': 'side-menu-circular1' },
				{ 'name': 'Circular 2', 'icon': 'clock', 'url': 'side-menu-circular2' },
				{ 'name': 'Circular 3', 'icon': 'clock', 'url': 'side-menu-circular3' },
				{ 'name': 'Circular 4', 'icon': 'clock', 'url': 'side-menu-circular4' },
				{ 'name': 'Circular 5', 'icon': 'clock', 'url': 'side-menu-circular5' }
			]
		},
		{
			'name': 'Side Menu: Drop Down',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': '/side-menu-drop-down1' },
				{ 'name': '2', 'icon': 'clock', 'url': '/side-menu-drop-down2' },
				{ 'name': '3', 'icon': 'clock', 'url': '/side-menu-drop-down3' },
				{ 'name': '4', 'icon': 'clock', 'url': '/side-menu-drop-down4' },
				{ 'name': '5', 'icon': 'clock', 'url': '/side-menu-drop-down5' }
			]
		},

		{
			'name': 'Side Menu: Radial',
			'items': [
				{ 'name': 'Radial   1', 'icon': 'clock', 'url': 'side-menu-radial1' },
				{ 'name': 'Radial   2', 'icon': 'clock', 'url': 'side-menu-radial2' },
				{ 'name': 'Radial   3', 'icon': 'clock', 'url': 'side-menu-radial3' },
				{ 'name': 'Radial   4', 'icon': 'clock', 'url': 'side-menu-radial4' },
				{ 'name': 'Radial   5', 'icon': 'clock', 'url': 'side-menu-radial5' }
			]
		},
		{
			'name': 'Side Menu: Sliding',
			'items': [
				{ 'name': 'Sliding  1', 'icon': 'clock', 'url': 'side-menu-sliding1' },
				{ 'name': 'Sliding  2', 'icon': 'clock', 'url': 'side-menu-sliding2' },
				{ 'name': 'Sliding  3', 'icon': 'clock', 'url': 'side-menu-sliding3' }

			]
		},
		{
			'name': 'Side Menu: Avatar',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'side-menu-with-avatar1' },
				{ 'name': '2', 'icon': 'clock', 'url': 'side-menu-sliding2' },
				{ 'name': '3', 'icon': 'clock', 'url': 'side-menu-sliding3' }
			]
		},
		{
			'name': 'Spinner',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'spinner1' },
				{ 'name': '2', 'icon': 'clock', 'url': 'spinner2' },
				{ 'name': '3', 'icon': 'clock', 'url': 'spinner3' }
			]
		},
		{
			'name': 'Top Menu: Hover',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'top-menu-hover-line1' },
				{ 'name': '2', 'icon': 'clock', 'url': 'top-menu-hover-line2' }
			]
		},
		{
			'name': 'Top Menu: Lava Lamp',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'top-menu-lava-lamp1' }
			]
		},
		{
			'name': 'Loading',
			'items': [
				{ 'name': '1', 'icon': 'clock', 'url': 'loading1' },
				{ 'name': '2', 'icon': 'clock', 'url': 'loading2' },
				{ 'name': '3', 'icon': 'clock', 'url': 'loading3' },
				{ 'name': 'Loading Circles', 'icon': 'clock', 'url': 'loading-circles' }
			]
		},
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
