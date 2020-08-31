import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
	/**/
	{ path: 'buttons1', loadChildren: './pages/buttons/1/buttons1.module#Buttons1PageModule' },
	{ path: 'buttons2', loadChildren: './pages/buttons/2/buttons2.module#Buttons2PageModule' },
	{ path: 'buttons3', loadChildren: './pages/buttons/3/buttons3.module#Buttons3PageModule' },
	{ path: 'buttons4', loadChildren: './pages/buttons/4/buttons4.module#Buttons4PageModule' },
	{ path: 'buttons5', loadChildren: './pages/buttons/5/buttons5.module#Buttons5PageModule' },
	/**/
	{ path: 'checkbox', loadChildren: './pages/checkbox/1/checkbox1.module#Checkbox1PageModule' },
	/**/
	{ path: 'demo1', loadChildren: './pages/basic/demo/demo1/page.module#Demo1PageModule' },
	{ path: 'demo2', loadChildren: './pages/basic/demo/demo2/page.module#Demo2PageModule' },
	/**/
	{ path: 'gauge1', loadChildren: './pages/gauge/1/gauge1.module#Gauge1PageModule' },
	{ path: 'gauge2', loadChildren: './pages/gauge/2/gauge2.module#Gauge2PageModule' },
	{ path: 'gauge3', loadChildren: './pages/gauge/3/gauge3.module#Gauge3PageModule' },
	{ path: 'gauge4', loadChildren: './pages/gauge/4/gauge4.module#Gauge4PageModule' },
	{ path: 'gauge5', loadChildren: './pages/gauge/5/gauge5.module#Gauge5PageModule' },
	/**/
	{ path: 'side-menu-animated1', loadChildren: './pages/sidemenu/animated/1/side-menu-animated1.module#SideMenuAnimated1PageModule' },
	{ path: 'side-menu-animated2', loadChildren: './pages/sidemenu/animated/2/side-menu-animated2.module#SideMenuAnimated2PageModule' },
	/**/
	{ path: 'side-menu-circular1', loadChildren: './pages/sidemenu/circular/1/page.module#SideMenuCircular1PageModule' },
	{ path: 'side-menu-circular2', loadChildren: './pages/sidemenu/circular/2/page.module#SideMenuCircular2PageModule' },
	{ path: 'side-menu-circular3', loadChildren: './pages/sidemenu/circular/3/page.module#SideMenuCircular3PageModule' },
	{ path: 'side-menu-circular4', loadChildren: './pages/sidemenu/circular/4/page.module#SideMenuCircular4PageModule' },
	{ path: 'side-menu-circular5', loadChildren: './pages/sidemenu/circular/5/page.module#SideMenuCircular5PageModule' },
	/**/
	{ path: 'side-menu-drop-down1', loadChildren: './pages/sidemenu/dropdown/1/side-menu-drop-down1.module#SideMenuDropDown1PageModule' },
	{ path: 'side-menu-drop-down2', loadChildren: './pages/sidemenu/dropdown/2/side-menu-drop-down2.module#SideMenuDropDown2PageModule' },
	{ path: 'side-menu-drop-down3', loadChildren: './pages/sidemenu/dropdown/3/side-menu-drop-down3.module#SideMenuDropDown3PageModule' },
	{ path: 'side-menu-drop-down4', loadChildren: './pages/sidemenu/dropdown/4/page.module#SideMenuDropDown4PageModule' },
	{ path: 'side-menu-drop-down5', loadChildren: './pages/sidemenu/dropdown/5/side-menu-drop-down5.module#SideMenuDropDown5PageModule' },
	/**/
	{ path: 'side-menu-radial1', loadChildren: './pages/sidemenu/radial/1/side-menu-radial1.module#SideMenuRadial1PageModule' },
	{ path: 'side-menu-radial2', loadChildren: './pages/sidemenu/radial/2/side-menu-radial2.module#SideMenuRadial2PageModule' },
	{ path: 'side-menu-radial3', loadChildren: './pages/sidemenu/radial/3/side-menu-radial3.module#SideMenuRadial3PageModule' },
	{ path: 'side-menu-radial4', loadChildren: './pages/sidemenu/radial/4/side-menu-radial4.module#SideMenuRadial4PageModule' },
	{ path: 'side-menu-radial5', loadChildren: './pages/sidemenu/radial/5/side-menu-radial5.module#SideMenuRadial5PageModule' },
	/**/
	{ path: 'side-menu-sliding1', loadChildren: './pages/sidemenu/sliding/1/side-menu-sliding1.module#SideMenuSliding1PageModule' },
	{ path: 'side-menu-sliding2', loadChildren: './pages/sidemenu/sliding/2/side-menu-sliding2.module#SideMenuSliding2PageModule' },
	{ path: 'side-menu-sliding3', loadChildren: './pages/sidemenu/sliding/3/side-menu-sliding3.module#SideMenuSliding3PageModule' },
	/**/
	{ path: 'side-menu-with-avatar1', loadChildren: './pages/sidemenu/avatar/1/page.module#SideMenuWithAvatar1PageModule' },
	/**/
	{ path: 'spinner1', loadChildren: './pages/spinner/1/page.module#Spinner1PageModule' },
	/**/
	{ path: 'template', loadChildren: './pages/template/template.module#TemplatePageModule' },
	/**/
	{ path: 'top-menu-hover-line1', loadChildren: './pages/top-menu/1/top-menu-hover-line1.module#TopMenuHoverLine1PageModule' },
	{ path: 'top-menu-hover-line2', loadChildren: './pages/top-menu/2/top-menu-hover-line2.module#TopMenuHoverLine2PageModule' },
	{ path: 'top-menu-lava-lamp1', loadChildren: './pages/top-menu/3/top-menu-lava-lamp1.module#TopMenuLavaLamp1PageModule' },
	/**/
	{ path: 'font-awesome1', loadChildren: './pages/fonts/font-awesome1/font-awesome1.module#FontAwesome1PageModule' },
	/**/
	{ path: 'loading1', loadChildren: './pages/loading/1/loading1.module#Loading1PageModule' },
	{ path: 'loading2', loadChildren: './pages/loading/2/loading2.module#Loading2PageModule' },
	{ path: 'loading3', loadChildren: './pages/loading/3/loading3.module#Loading3PageModule' },
	{ path: 'loading-circles', loadChildren: './pages/loading/4/page.module#AnimatedCircles1PageModule' },
	/**/
	{ path: 'solar-system', loadChildren: './pages/apps/solarsystem/solar-system/page.module#SolarSystemPageModule' },
	{ path: 'blowing-bubbles', loadChildren: './pages/animations/bubbles/1/page.module#BlowingBubblesPageModule' },
	{ path: 'parallel-park', loadChildren: './pages/animations/movement/1/page.module#ParallelParkPageModule' },
	{ path: 'calendar', loadChildren: './pages/apps/calendar/1/page.module#Calendar1AppPageModule' },
	{ path: 'chess-3d', loadChildren: './pages/apps/chess/chess-3d/page.module#Chess3DPageModule' },
	{ path: 'coffee-app', loadChildren: './pages/apps/coffee-app/1/page.module#CoffeeAppPageModule' },
	{ path: 'parallax1', loadChildren: './pages/animations/parallax/1/page.module#Parallax1PageModule' },
	{ path: 'snow1', loadChildren: './pages/animations/snow/1/page.module#Snow1PageModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
