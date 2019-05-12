import { ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injector } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student-App';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
    this.getComponent();
    this.toComponent();
  }

  toComponent() {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(this.getComponent())
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }

  getComponent() {
    const loc = location.pathname;
    if (loc === '/') {
      return BooksComponent;
    } else if (loc === '/login') {
      return LoginComponent;
    }
  }
}
