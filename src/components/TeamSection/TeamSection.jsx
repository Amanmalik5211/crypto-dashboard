import "./TeamSection.css";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      designation: "Designation here",
      image:
        "https://imgs.search.brave.com/faFAoeUqrk9NeedaaPAR1KUffbKnLasnfs_hsSBB-4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk2Lzc2LzUz/LzM2MF9GXzQ5Njc2/NTM4OV9xUkd1SzMz/U2NPNDJuWmtqaUdO/SjZtSVdiNkNWNmdS/aS5qcGc", // Replace with actual image URL
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequat proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      id: 2,
      name: "Elina Williams",
      designation: "Designation here",
      image:
        "https://imgs.search.brave.com/24iKeM0qAsh78VpOmLfyLdWNKIrPcMI5HmxRKhVr4Gg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM5LzUzLzYw/LzM2MF9GXzEzOTUz/NjA4Nl95eG80RERB/Z0JNS0N4d2dkcDhL/SnZ6cFpnbk1DOENw/eC5qcGc", // Replace with actual image URL
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequat proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      id: 3,
      name: "John Smith",
      designation: "Designation here",
      image:
        "https://imgs.search.brave.com/ydRRez-hyjLw-7QvqLcker4AEFDdEctJ80Z0BmTig8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk4/MzIzNDkzL3Bob3Rv/L2hhcHB5LWJ1c2lu/ZXNzd29tYW4taG9s/ZGluZy1kaWdpdGFs/LXRhYmxldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RUhE/Zm5lamtRX1JnVXY4/Y010d21Td2JoRm1n/ZDNkLTZjMXRVbHMz/THZ6OD0", // Replace with actual image URL
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequat proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];

  return (
    <div className="team-section">
      <h2>Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="team-cards">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h5>{member.name}</h5>
              <p className="designation">{member.designation}</p>
            </div>

            <div className="team-info">
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
