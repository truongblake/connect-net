export default function Status() {
    return (
        <div>
            <div>
                Status
            </div>
            <div>
                <div>Court 1</div>
                <div className="court game1">
                    <div className="team"></div>
                    <div className="team"></div>
                </div>
                <div>Court 2</div>
                <div className="court game2">
                    <div className="team"></div>
                    <div className="team"></div>
                </div>
                <div>Court 3</div>
                <div className="court game3">
                    <div className="team"></div>
                    <div className="team"></div>
                </div>
                <div className="waitlist">
                    <div>
                        Load Teams Here
                    </div>
                </div>
            </div>
        </div>
    )
}
