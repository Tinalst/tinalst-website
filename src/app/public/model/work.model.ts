export class WorkModel {
    finish_time: string;
    title: string;
    description: string[];
    constructor(obj?) {
        this.finish_time = obj && obj['finish_time'] || '';
        this.title = obj && obj['title'] || '';
        this.description = obj && obj['description'] || '';
    }
}
