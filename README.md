# Angular: Interaction between Component with Shared service

In this video, We are going to learn how we can have interaction between components via shared service.

If you have not seen my first video about Interaction between Component with @Input and @Output in Angular and then I would highly recommend it to see that video. Following is a link to that video.

https://bit.ly/AngularComponentInteraction

In this video, I have created a shared service that has got a message source as behavior subject from rx.js which holds an observable. By default, I have initialized it as the default message. Then I have created a new method where I have created a method called "changeMessage"  from where the user can change the message.

After that, I have injected this service into two different components and subscribe to current message observable. I have also created a button click event in both components which calls the  Change message method from shared service. As we have subscribed to both our message observable it will reflect in message change in both components.



# Technology used in this application:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
