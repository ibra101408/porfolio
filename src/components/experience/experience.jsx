import React, { useState, useRef } from 'react';
import './experience.css';
import { FaGithub } from "react-icons/fa";
import experienceData from './experienceData.json'; // Assuming you have your data in a JSON file

const Experience = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [showAllItems, setShowAllItems] = useState(false);
    const allTags = Array.from(new Set(experienceData.flatMap((item) => item.tags)));
    const experienceRef = useRef(null); // Create a ref for the experience section

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const filteredExperience = experienceData.filter((item) =>
        selectedTags.length === 0 || selectedTags.every((tag) => item.tags.includes(tag))
    );

    const maxItemsToShow = showAllItems ? filteredExperience.length : 4;
    const toggleShowItems = () => {
        setShowAllItems(!showAllItems);
        // Scroll to the top of the experience section when toggling show more/less
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container">
                <div className="tag__container">
                    {allTags.map((tag) => (
                        <span
                            className="tags"
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            style={{
                                backgroundColor: selectedTags.includes(tag) ? '#ccc268' : 'rgb(161, 209, 195)',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="experience__content_container" ref={experienceRef}>
                    {filteredExperience.slice(0, maxItemsToShow).map((item) => (
                        <div className="experience__content_items" key={item.id}>
                            <h3 className="experience__content_name">{item.name}</h3>
                            <p className="experience__content_tag">
                                {item.tags.map((tag, index) => (
                                    <span className={`tag tag-${index}`} key={index}>{tag}</span>
                                ))}
                            </p>
                            <p>
                                <a className="experience__content_github" href={item.githubLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
                {filteredExperience.length > 4 && (
                    <button
                        className="experience__content_toggle-button"
                        onClick={toggleShowItems}
                    >
                        {showAllItems ? "Show less" : "Show more"}
                    </button>
                )}
            </div>
        </section>
    )
}

export default Experience;
