package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.appointment;

@RestController
public class AppointmentController {

    @PostMapping("/submitAppointment")
    public String submitappointment(@RequestBody appointment appointmentRequest) {
        // Here, you can perform the booking submission logic with the received form data
        // For example, you can save the appointment data to a database
        // In this example, we'll just print the data to the console

        System.out.println("Booking submitted:");
        System.out.println("Name: " + appointmentRequest.getName());
        System.out.println("Email: " + appointmentRequest.getEmail());
        System.out.println("Phone: " + appointmentRequest.getPhone());
        System.out.println("Service: " + appointmentRequest.getService());
        System.out.println("Date: " + appointmentRequest.getDate());
        System.out.println("Time: " + appointmentRequest.getTime());

        return "Booking submitted successfully!";
    }
}
