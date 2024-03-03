import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit, OnDestroy {
    model: AddCategoryRequest;
    private addCategorySubscription?: Subscription;

    constructor(private categoryService: CategoryService) {
        this.model = {
            name: '',
            urlHandle: '',
        };
    }

    ngOnInit(): void {}

    onFormSubmit() {
        this.addCategorySubscription = this.categoryService
            .addCategory(this.model)
            .subscribe({
                next: (response) => {
                    console.log('Category added successfully');
                },
            });
    }

    ngOnDestroy(): void {
        this.addCategorySubscription?.unsubscribe();
    }
}
