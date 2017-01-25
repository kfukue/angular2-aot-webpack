import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from '../components/hello-world.component';
import { CovalentCoreModule } from '@covalent/core';
@NgModule({
  bootstrap: [HelloWorldComponent],
  declarations: [HelloWorldComponent],
  imports: [BrowserModule,
          CovalentCoreModule.forRoot()],
  providers: []
})
export class MainModule {}
