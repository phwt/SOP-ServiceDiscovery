# Service Discovery Monitor

## Running eureka and 5 other services

1. Import Maven project in `services` folder into Eclipse IDE
2. Start service discovery in `service-discovery-server`
3. Start all service client in `service-discovery-clientX` (X represents index of 5 total services)
   - The service will be running on `localhost` at port `8081`, `8082`, `8083`, `8084` and `8085` respectively

## View the monitor

1. Visit `index.html` inside `/monitor/` folder
2. The dashboard will show the status of all registered service in each card on the screen

** The monitor must be served on development server such as XAMPP / Live Server to be able to perform Cross-Origin Request **
