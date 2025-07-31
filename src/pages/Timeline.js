import React from 'react';
import timelineData from '../data/timelineData';
import '../styles/Timeline.css';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function Timeline() {
  const sortedData = [...timelineData].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );

  return (
   <div className="timeline-container">
  <h1 className="timeline-heading">📷 Our Photo Gallery</h1>

  {timelineData.map((item, index) => (
    <div className="timeline-card" key={index}>
      <img
        src={require(`../assets/timeline_${item.id}.jpg`)}
        alt="timeline"
        className="timeline-image"
      />
      <p className="timeline-description">{item.description}</p>

    </div>
  ))}
</div>

  );
}

export default Timeline;