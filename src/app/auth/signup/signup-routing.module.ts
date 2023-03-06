import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SignupModule } from './signup.module';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SignupComponent }
    ])],
    exports: [RouterModule]
})
export class SignupRoutingModule { }
