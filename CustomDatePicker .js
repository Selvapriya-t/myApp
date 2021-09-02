import React, { Component } from "react";
import "./AppointmentList.css";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import {
    Row,
    Col,
    Container,
    Button
} from "react-bootstrap";


class CustomDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }

    // alertStartDate = () => {
    //     alert(this.state.startDate);
    // }
    // alertEndDate = () => {
    //     alert(this.state.endDate);
    // }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />
                        {/* <Button onClick={this.alertStartDate}> Click me for StartDate</Button>
<Button onClick={this.alertEndDate}> Click me for EndDate </Button> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CustomDatePicker;