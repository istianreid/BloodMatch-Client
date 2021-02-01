import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-category filter-status">
                    Show Me
                    <select value={this.props.status} onChange={this.props.storiesStatus}>
                        <option value="">All Status</option>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>
                <div className="filter-category filter-hospital">
                    Request at
                    <select value={this.props.hospital} onChange={this.props.storiesHospital}>
                        <option value="">Hospital</option>
                        <option value="general">General</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div className="filter-category filter-location">in
                    <select value={this.props.location} onChange={this.props.storiesLocation}>
                        <option value="">City</option>
                        <option value="Quezon City">Quezon City</option>
                        <option value="Manila">Manila</option>
                        <option value="Cebu">Cebu</option>
                        <option value="Davao">Davao</option>
                    </select>
                </div>
            </div>
        )
    }
}
