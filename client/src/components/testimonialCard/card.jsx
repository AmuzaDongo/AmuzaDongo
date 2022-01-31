import React from 'react'
import Card from 'react-bootstrap/Card'
import "./card.css"

export default function card() {
    return (
        <Card className="d-block testimonial-card">
            <Card.Body className="t-body">
                <Card.Title className="title">Web Development</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Via Upwork - 24th-jan-2020</Card.Subtitle>
                <Card.Text className="t-text">
                    <p>
                        I am well-qualified Full Stack Developer 
                        familiar with wide range of 
                        programming utilities and languages.
                    </p>
                    <div className="testimonial-img">
                        <div className="t-img">
                            <img src="assets/test1.png" alt="" />
                        </div>
                        <div className="client-info">
                            <h4 className="clientName">Banda Sipiwe</h4>
                            <span className="designation">CEO ~ Graypoint</span>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
