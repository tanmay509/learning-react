
export function Card(props) {
    return (
        <div className="card">
            <img
                src={props.company_logo}
                alt="Company Logo"
                className="company-logo"
            />

            <div className="job-details">
                <div className="job-post">
                    {props.job_role}
                </div>

                <div className="job-meta">
                    <span>
                        <strong>Salary:</strong> {props.salary}
                    </span>

                    <span className="job-location">
                        <strong>Location:</strong> {props.location}
                    </span>
                </div>
            </div>
        </div>
    );
}

