import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET", url: `https://jsearch.p.rapidapi.com/${endpoint}`, headers: {
            "X-RapidAPI-Key": '39f76e927cmsh11e5d2bcee1562fp1abb8cjsne7add12cf7ec',
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        }, params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            // const response = await axios.request(options);

            setData([{
                "employer_name": "TechShack",
                "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGFk0_Wn7Y3i0jsz6PslFdSRAwy0KVyLqKQn7&s=0",
                "employer_website": null,
                "employer_company_type": null,
                "job_publisher": "LinkedIn",
                "job_id": "SQ7GoLuHvohmsPGPAAAAAA==",
                "job_employment_type": "FULLTIME",
                "job_title": "Lead React Native Developer",
                "job_apply_link": "https://www.linkedin.com/jobs/view/lead-react-native-developer-at-techshack-3832482257",
                "job_apply_is_direct": false,
                "job_apply_quality_score": 0.6797,
                "apply_options": [{
                    "publisher": "LinkedIn",
                    "apply_link": "https://www.linkedin.com/jobs/view/lead-react-native-developer-at-techshack-3832482257",
                    "is_direct": false
                }],
                "job_description": "Lead React Native Engineer | Tech for good | React Native, Typescript, Leadership\n\nPosition open to anyone in East Coast time zone.\n\nWe are working with a start-up client in the tech for good space who are aiming to make the planet and the environment we live in a better space. They are looking for a Lead Engineer to build out their mobile applications, and who is an expert with React Native as well as a proven leader.\n\nAs a Lead Engineer, you'll be at the forefront of shaping the technical landscape, influencing critical decisions that propel their new application. Experience working on Greenfield apps (0 - 1 builds) is essential for the role.\n\nKey Skills:\n• React Native\n• Typescript\n• Leadership experience\n• Excellent communicator\n• Start up experience\n\nFully Remote\n\nSalary - up to $180k\n\nLead React Native Engineer | Tech for good | React Native, Typescript, Leadership",
                "job_is_remote": true,
                "job_posted_at_timestamp": 1708108781,
                "job_posted_at_datetime_utc": "2024-02-16T18:39:41.000Z",
                "job_city": null,
                "job_state": null,
                "job_country": "US",
                "job_latitude": 37.09024,
                "job_longitude": -95.71289,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=SQ7GoLuHvohmsPGPAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": "2024-03-17T18:39:41.000Z",
                "job_offer_expiration_timestamp": 1710700781,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": null,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": null,
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": true,
                    "degree_mentioned": false,
                    "degree_preferred": false,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": 150000,
                "job_max_salary": 180000,
                "job_salary_currency": "USD",
                "job_salary_period": "YEAR",
                "job_highlights": {
                    "Qualifications": ["Leadership experience", "Excellent communicator", "Start up experience"],
                    "Responsibilities": ["As a Lead Engineer, you'll be at the forefront of shaping the technical landscape, influencing critical decisions that propel their new application"],
                    "Benefits": ["Salary - up to $180k"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4"
            }, {
                "employer_name": "Dice",
                "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
                "employer_website": null,
                "employer_company_type": "Information",
                "job_publisher": "LinkedIn",
                "job_id": "h5Z5mkHVhFq59_uqAAAAAA==",
                "job_employment_type": "FULLTIME",
                "job_title": "React Native Developer/ Mobile Apps Developer- Richfield, MN- Hybrid Role",
                "job_apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-mobile-apps-developer-richfield-mn-hybrid-role-at-dice-3832408823",
                "job_apply_is_direct": false,
                "job_apply_quality_score": 0.639,
                "apply_options": [{
                    "publisher": "LinkedIn",
                    "apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-mobile-apps-developer-richfield-mn-hybrid-role-at-dice-3832408823",
                    "is_direct": false
                }, {
                    "publisher": "Preprod-Us.cb-Intl.tech",
                    "apply_link": "https://preprod-us.cb-intl.tech/job/J3W1026G0PGSMR39YJD",
                    "is_direct": false
                }],
                "job_description": "Dice is the leading career destination for tech experts at every stage of their careers. Our client, Javen Technologies, Inc, is seeking the following. Apply via Dice today!\n\nGreetings from Javen Technologies Inc..,\n\nDirect client requirement...\n\nJob Title: Senior React Native Developer\n\nLocation: Richfield, MN- Hybrid role\n\nDuration: 6+ months\n\nMandatory Skills:\n• 8 years of experience on Mobile applications\n• 4 years of experience on JavaScript or TypeScript\n• 3 years of developing experience with React Native\n• 2+ years of experience with web app development\n• Strong experience with Swift.\n• Strong experience with Java or Kotlin.\n• Experience with Spring framework and Node JS.\n• DevOps automation tools (GitHub Actions, Jenkins), software version control (git), and testing frameworks\n• Bachelor's degree in IT, Computer Science, Engineering, or related field OR equivalent combination of education and/or experience\n\nKind Regards,\n\nJoshua Gidugu\n\nLinkedIn- Javen Technologies Inc., | 8030 Old Cedar Ave. Ste #225, Bloomington, MN 55425 |\n\nReact Native Developer/ Mobile Apps Developer- Richfield, MN- Hybrid Role",
                "job_is_remote": true,
                "job_posted_at_timestamp": 1708097448,
                "job_posted_at_datetime_utc": "2024-02-16T15:30:48.000Z",
                "job_city": "Richfield",
                "job_state": "MN",
                "job_country": "US",
                "job_latitude": 44.883297,
                "job_longitude": -93.283005,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=h5Z5mkHVhFq59_uqAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": "2024-03-17T15:30:48.000Z",
                "job_offer_expiration_timestamp": 1710689448,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": 96,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": null,
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": true,
                    "degree_mentioned": true,
                    "degree_preferred": true,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": null,
                "job_max_salary": null,
                "job_salary_currency": null,
                "job_salary_period": null,
                "job_highlights": {
                    "Qualifications": ["8 years of experience on Mobile applications", "4 years of experience on JavaScript or TypeScript", "3 years of developing experience with React Native", "2+ years of experience with web app development", "Strong experience with Swift", "Strong experience with Java or Kotlin", "Experience with Spring framework and Node JS", "DevOps automation tools (GitHub Actions, Jenkins), software version control (git), and testing frameworks", "Bachelor's degree in IT, Computer Science, Engineering, or related field OR equivalent combination of education and/or experience"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4",
                "job_naics_code": "519130",
                "job_naics_name": "Internet Publishing and Broadcasting and Web Search Portals"
            }, {
                "employer_name": "Syntricate Technologies",
                "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QIeIRR1eEAU6TLTC7dUYG0qWOexbktOXwy7S&s=0",
                "employer_website": null,
                "employer_company_type": null,
                "job_publisher": "LinkedIn",
                "job_id": "0_OhHconKzQtMuycAAAAAA==",
                "job_employment_type": "CONTRACTOR",
                "job_title": "React Native Developer Level III",
                "job_apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-level-iii-at-syntricate-technologies-3827293893",
                "job_apply_is_direct": false,
                "job_apply_quality_score": 0.688,
                "apply_options": [{
                    "publisher": "LinkedIn",
                    "apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-level-iii-at-syntricate-technologies-3827293893",
                    "is_direct": false
                }, {
                    "publisher": "Talent.com",
                    "apply_link": "https://www.talent.com/view?id=6caa98c946e6",
                    "is_direct": false
                }, {
                    "publisher": "Jobilize",
                    "apply_link": "https://www.jobilize.com/job/us-mn-minneapolis-react-native-developer-level-iii-syntricate-technologies",
                    "is_direct": false
                }],
                "job_description": "Submission deadline for interview selection 3PM CT 2/20\n\nLocation: highly preferred local to Minneapolis or Atlanta, but open to remote - our top competitor is local to MN and has a heavy pipeline of local candidates, so that would be ideal.\n• Initial 6 months contract to start - Very likely to be longer-termed/ongoing\n\nTell Us About Your Department\n\nThe App Growth & Strategy team is responsible for driving and delivering experiences that increase adoption of (and engagement with) the Best Buy mobile app. We scale in-app relationship building experiences that elevate the end-to-end customer journey and drives business impact, and strengthen the app foundation to scale its role in business and customer experiences.\n\nProject Description\n\nThis team builds and maintains app-exclusive functionality, such as Best Buy Drops, iOS Live Activities, mobile home screen widgets, Apple and Google wallet integration, and so on. We also promote the mobile app using smart banners on the mobile version of BestBuy.com.\n\nPosition Summary/Job Description\n\nBest Buy is looking for a hands-on, creative, and collaborative software engineer to join our diverse team and develop high-quality cutting-edge software solutions for our mobile and web apps. In this role, you will work closely with other software engineers, product managers, and test engineers and design, develop, deploy, and debug full stack software applications. You will work closely within our agile software development process and have an important impact on the development and delivery of high-quality software solutions.\n\nWhat will you do?\n\n\" Develop, integrate, test, deploy, debug mobile software solutions.\n\n\" Evaluate new software technologies (i.e., libraries, frameworks, services) that help development to stay abreast of industry trends and standards\n\n\" Take ownership of the software we build as a team, with a focus on delivering the best possible customer experience.\n\n\" Contribute to the development of web-based experiences as needed.\n\nWhat We Look For In An Engineer\n\n\" Ability to take ownership over your work. Every day is a challenge to ensure you are performing to the expectations you and your team have agreed upon, both regarding estimates and to the general process.\n\n\" Ability to work through new and difficult issues and contribute to libraries as needed.\n\n\" A positive mindset and can-do attitude.\n\n\" Youre constantly striving to learn new things and improve. You follow industry news, regularly tinker with new technologies, and read books and blogs to keep your skills current.\n\n\" You work well within a team environment and enjoy working in a collaborative setting.\n\n\" Ability to write well-documented, clean JavaScript or TypeScript code.\n\n\" Experience working with GraphQL development\n\n\" Experience developing with native iOS and/or Android SDKs\n\n\" Experience working with third-party dependencies and debugging dependency conflicts.\n\n\" Understanding of REST APIs.\n\n\" Understanding of coding best practices and a commitment to following them.\n\nMinimum Qualifications\n\n\" Bachelor's degree in IT, Computer Science, Engineering, or related field OR equivalent combination of education and/or experience\n\n\" 2 years of hands-on experience in:\n• Programming with JavaScript and/or TypeScript\n• Developing with React Native\n• DevOps automation tools (GitHub Actions, Jenkins), software version control (git), and testing frameworks\n\nPreferred Qualifications\n\n\" 3+ years of relevant professional experience\n\n\" 2+ years of experience with web app development\n\nHow much time will the resource spend pair programming?\n\n20 70%\n\nSkills Overview\n\nWhat are the top five skills and number of years of experience required to perform this job?\n\nReact Native: 2+ years\n\nJavaScript: 2+ years\n\nTypeScript: 1+ years\n\nSwift: 1+ years\n\nJava or Kotlin: 1+ years\n\nWhat are some preferred/nice to have skills the manager is looking for?\n\nNodeJS\n\nJava with Spring framework\n\nWill there be a Hacker Rank test Required for this REQ?\n\nYes\n\nInterview Process Overview\n\nScreening: 1 hour with hiring manager, to discuss the role, candidates background, and do HackerRank\n\nFull loop: 1.5 hours for technical discussion with engineers, plus a shorter session with product managers and/or QA from the team",
                "job_is_remote": false,
                "job_posted_at_timestamp": 1707990851,
                "job_posted_at_datetime_utc": "2024-02-15T09:54:11.000Z",
                "job_city": "Minneapolis",
                "job_state": "MN",
                "job_country": "US",
                "job_latitude": 44.977753,
                "job_longitude": -93.26501,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=0_OhHconKzQtMuycAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": "2024-03-16T09:54:11.000Z",
                "job_offer_expiration_timestamp": 1710582851,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": 36,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": null,
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": true,
                    "degree_mentioned": true,
                    "degree_preferred": true,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": null,
                "job_max_salary": null,
                "job_salary_currency": null,
                "job_salary_period": null,
                "job_highlights": {
                    "Qualifications": ["\" Ability to take ownership over your work", "\" Ability to work through new and difficult issues and contribute to libraries as needed", "\" A positive mindset and can-do attitude", "\" Youre constantly striving to learn new things and improve", "You follow industry news, regularly tinker with new technologies, and read books and blogs to keep your skills current", "\" You work well within a team environment and enjoy working in a collaborative setting", "\" Ability to write well-documented, clean JavaScript or TypeScript code", "\" Experience working with GraphQL development", "\" Experience developing with native iOS and/or Android SDKs", "\" Experience working with third-party dependencies and debugging dependency conflicts", "\" Bachelor's degree in IT, Computer Science, Engineering, or related field OR equivalent combination of education and/or experience", "\" 2 years of hands-on experience in:", "Programming with JavaScript and/or TypeScript", "Developing with React Native", "DevOps automation tools (GitHub Actions, Jenkins), software version control (git), and testing frameworks", "\" 3+ years of relevant professional experience", "\" 2+ years of experience with web app development", "React Native: 2+ years", "JavaScript: 2+ years", "TypeScript: 1+ years", "Swift: 1+ years", "Java or Kotlin: 1+ years", "NodeJS"],
                    "Responsibilities": ["In this role, you will work closely with other software engineers, product managers, and test engineers and design, develop, deploy, and debug full stack software applications", "You will work closely within our agile software development process and have an important impact on the development and delivery of high-quality software solutions", "\" Develop, integrate, test, deploy, debug mobile software solutions", "\" Evaluate new software technologies (i.e., libraries, frameworks, services) that help development to stay abreast of industry trends and standards", "\" Take ownership of the software we build as a team, with a focus on delivering the best possible customer experience", "\" Contribute to the development of web-based experiences as needed", "Screening: 1 hour with hiring manager, to discuss the role, candidates background, and do HackerRank", "Full loop: 1.5 hours for technical discussion with engineers, plus a shorter session with product managers and/or QA from the team"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4"
            }, {
                "employer_name": "Info Way Solutions",
                "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dnYZKFN7akNCaoFuUvfm4GNTxS3wtOltpTeQ&s=0",
                "employer_website": null,
                "employer_company_type": null,
                "job_publisher": "LinkedIn",
                "job_id": "5ZEDJgqy40fLuaiiAAAAAA==",
                "job_employment_type": "CONTRACTOR",
                "job_title": "React Native Developer",
                "job_apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-at-info-way-solutions-3826718905",
                "job_apply_is_direct": false,
                "job_apply_quality_score": 0.6795,
                "apply_options": [{
                    "publisher": "LinkedIn",
                    "apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-at-info-way-solutions-3826718905",
                    "is_direct": false
                }, {
                    "publisher": "Adzuna", "apply_link": "https://www.adzuna.com/details/4570685602", "is_direct": false
                }],
                "job_description": "Hello Professionals\n\nHope you are doing well, i am sharing the below job requirements with you, do let me know if you are open to a new opportunity/have a consultant open for a new opportunity.\n\nJob Description\n\nJob Description: React Native Developer\n\nLocations Dallas, TX// Reston, VA// Bentonville, AR\n\nPosition Overview\n\nWe are looking for a talented React Native Developer with strong frontend skills to join our team. The ideal candidate will be responsible for developing and maintaining mobile applications using React Native, as well as contributing to frontend development tasks for our web applications. You will collaborate with our product development team to create seamless user experiences across both mobile and web platforms.\n\nResponsibilities\n• Develop and maintain mobile applications using React Native, ensuring high performance and responsiveness.\n• Collaborate with cross-functional teams to define, design, and implement new features and enhancements for mobile applications.\n• Write clean, maintainable, and efficient code for both frontend and mobile applications.\n• Contribute to frontend development tasks for web applications using modern JavaScript frameworks such as React.js.\n• Work closely with designers to ensure that user interface and user experience requirements are met across mobile and web platforms.\n• Optimize applications for maximum speed and scalability.\n• Participate in code reviews to maintain code quality and ensure adherence to coding standards and best practices.\n• Debug and troubleshoot issues reported by users or identified during testing phases.\n• Stay up-to-date with the latest industry trends and technologies in mobile and frontend development.\n\nQualifications\n• Bachelor's degree in Computer Science, Engineering, or a related field.\n• Proven experience in mobile application development using React Native.\n• Strong proficiency in JavaScript and familiarity with frontend frameworks such as React.js.\n• Experience with state management libraries such as Redux or Context API.\n• Knowledge of native iOS and Android development tools and frameworks.\n• Understanding of RESTful APIs and asynchronous request handling.\n• Experience with version control systems such as Git.\n• Excellent problem-solving skills and attention to detail.\n• Strong communication and collaboration skills.\n• Ability to work in a fast-paced environment and meet deadlines.\n\nPreferred Qualifications\n• Experience with Agile/Scrum development methodologies.\n• Familiarity with CI/CD pipelines and automated testing frameworks.\n• Knowledge of TypeScript.\n• Experience with frontend build tools such as Webpack or Babel.\n• Previous experience in developing cross-platform mobile applications.\n• Contributions to open-source projects or personal projects available for review.\n\nThis job description outlines the key responsibilities, qualifications, and preferred qualifications for a React Native Developer with Frontend Experience role. Adjustments may be made based on the specific needs and requirements of the hiring organization.\n\nGirish Tanwar\n\nSr. Executive - Recruitment & Operations\n\nMobile: +19253019833\n\nEmail: girish.t@infowaygroup.com\n\nLinkedIn: https://www.linkedin.com/in/girishtan007/\n\nInfo Way Solutions LLC. | 46520 Fremont Blvd, Suite 614 | Fremont, CA - 94538",
                "job_is_remote": false,
                "job_posted_at_timestamp": 1707904161,
                "job_posted_at_datetime_utc": "2024-02-14T09:49:21.000Z",
                "job_city": "Fremont",
                "job_state": "CA",
                "job_country": "US",
                "job_latitude": 37.54854,
                "job_longitude": -121.98859,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=5ZEDJgqy40fLuaiiAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": "2024-03-15T09:49:13.000Z",
                "job_offer_expiration_timestamp": 1710496153,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": null,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": null,
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": true,
                    "degree_mentioned": true,
                    "degree_preferred": true,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": null,
                "job_max_salary": null,
                "job_salary_currency": null,
                "job_salary_period": null,
                "job_highlights": {
                    "Qualifications": ["Bachelor's degree in Computer Science, Engineering, or a related field", "Proven experience in mobile application development using React Native", "Strong proficiency in JavaScript and familiarity with frontend frameworks such as React.js", "Experience with state management libraries such as Redux or Context API", "Knowledge of native iOS and Android development tools and frameworks", "Understanding of RESTful APIs and asynchronous request handling", "Experience with version control systems such as Git", "Excellent problem-solving skills and attention to detail", "Strong communication and collaboration skills", "Ability to work in a fast-paced environment and meet deadlines"],
                    "Responsibilities": ["You will collaborate with our product development team to create seamless user experiences across both mobile and web platforms", "Develop and maintain mobile applications using React Native, ensuring high performance and responsiveness", "Collaborate with cross-functional teams to define, design, and implement new features and enhancements for mobile applications", "Write clean, maintainable, and efficient code for both frontend and mobile applications", "Contribute to frontend development tasks for web applications using modern JavaScript frameworks such as React.js", "Work closely with designers to ensure that user interface and user experience requirements are met across mobile and web platforms", "Optimize applications for maximum speed and scalability", "Participate in code reviews to maintain code quality and ensure adherence to coding standards and best practices", "Debug and troubleshoot issues reported by users or identified during testing phases", "Stay up-to-date with the latest industry trends and technologies in mobile and frontend development"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4"
            }, {
                "employer_name": "Tanisha Systems, Inc",
                "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnxzdwZkGIfkULLcFylqAUtVDM6wqzSlaOXe-&s=0",
                "employer_website": "http://www.tanishasystems.com",
                "employer_company_type": null,
                "job_publisher": "LinkedIn",
                "job_id": "nQBxS-osd9Ag_bKuAAAAAA==",
                "job_employment_type": "CONTRACTOR",
                "job_title": "React Native Developer - - - Richfield, MN // Seattle, WA // Minneapolis, MN // Boston, MA // Atlanta, GA (Hybrid 1-2 days onsite) - - Only on W2",
                "job_apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-richfield-mn-seattle-wa-minneapolis-mn-boston-ma-atlanta-ga-hybrid-1-2-days-onsite-only-on-w2-at-tanisha-systems-inc-3827994734",
                "job_apply_is_direct": false,
                "job_apply_quality_score": 0.6758,
                "apply_options": [{
                    "publisher": "LinkedIn",
                    "apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-richfield-mn-seattle-wa-minneapolis-mn-boston-ma-atlanta-ga-hybrid-1-2-days-onsite-only-on-w2-at-tanisha-systems-inc-3827994734",
                    "is_direct": false
                }],
                "job_description": "Hello.\n\nHope you are doing great!\n\nTitle - Full Stack Developer IV – React Native\n\nLocation - Richfield, MN // Seattle, WA // Minneapolis, MN // Boston, MA // Atlanta, GA (hybrid 1-2 days)\n\nContract on W2\n\nJob Description\n\n• Programming with JavaScript and/or TypeScript.\n\n• Developing with React Native.\n\n• DevOps automation tools (GitHub Actions, Jenkins), software version control (git), and testing frameworks.\n\n• Ability to write well-documented, clean JavaScript or TypeScript code.\n\n• Experience working with GraphQL development.\n\n• Experience developing with native iOS and/or Android SDKs.\n\n• Experience working with third-party dependencies and debugging dependency conflicts.\n\n• Understanding of REST APIs.\n\n• Understanding of coding best practices and a commitment to following them.\n\n• React Native: 5-7 years\n\n• JavaScript: -5+ years\n\n• TypeScript: 4+ years\n\n• Swift: 4+ years\n\n• Java or Kotlin: 5+ years\n\nThanks again.\n\nBest Regards!\n\nRahul Kumar Singh\n\nSr. Technical Recruiter\n\nTanisha Systems Inc\n\nOffice: (212) 729 6543 Ext 363",
                "job_is_remote": false,
                "job_posted_at_timestamp": 1708031631,
                "job_posted_at_datetime_utc": "2024-02-15T21:13:51.000Z",
                "job_city": "Atlanta",
                "job_state": "GA",
                "job_country": "US",
                "job_latitude": 33.748753,
                "job_longitude": -84.38769,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=nQBxS-osd9Ag_bKuAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": "2024-03-16T21:13:51.000Z",
                "job_offer_expiration_timestamp": 1710623631,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": null,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": null,
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": true,
                    "degree_mentioned": false,
                    "degree_preferred": false,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": null,
                "job_max_salary": null,
                "job_salary_currency": null,
                "job_salary_period": null,
                "job_highlights": {
                    "Qualifications": ["Programming with JavaScript and/or TypeScript", "Developing with React Native", "DevOps automation tools (GitHub Actions, Jenkins), software version control (git), and testing frameworks", "Ability to write well-documented, clean JavaScript or TypeScript code", "Experience working with GraphQL development", "Experience developing with native iOS and/or Android SDKs", "Experience working with third-party dependencies and debugging dependency conflicts", "React Native: 5-7 years", "JavaScript: -5+ years", "TypeScript: 4+ years", "Swift: 4+ years", "Java or Kotlin: 5+ years"],
                    "Responsibilities": ["Understanding of REST APIs", "Understanding of coding best practices and a commitment to following them"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4"
            }, {
                "employer_name": "York Enterprise Solutions",
                "employer_logo": "https://media.glassdoor.com/sql/15461/york-enterprise-solutions-squarelogo-1427271148553.png",
                "employer_website": "http://www.yorksolutions.net",
                "employer_company_type": "Computer Services",
                "job_publisher": "Monster",
                "job_id": "S6NnCSDlnRFdz925AAAAAA==",
                "job_employment_type": "FULLTIME",
                "job_title": "React Native Developer",
                "job_apply_link": "https://www.monster.com/job-openings/react-native-developer-minneapolis-mn--2ac889f5-b19c-4f2a-bcd1-78661e77a610",
                "job_apply_is_direct": false,
                "job_apply_quality_score": 0.5548,
                "apply_options": [{
                    "publisher": "Monster",
                    "apply_link": "https://www.monster.com/job-openings/react-native-developer-minneapolis-mn--2ac889f5-b19c-4f2a-bcd1-78661e77a610",
                    "is_direct": false
                }],
                "job_description": "Develop, integrate, test, deploy, debug mobile software solutions.\n• Evaluate new software technologies (i.e., libraries, frameworks, services) that help development to stay abreast of industry trends and standards\n• Take ownership of the software we build as a team, with a focus on delivering the best possible customer experience.\n• Contribute to the development of web-based experiences as needed.\nWhat we look for in an engineer:\n• Ability to take ownership over your work. Every day is a challenge to ensure you are performing to the expectations you and your team have agreed upon, both regarding estimates and to the general process.\n• Ability to work through new and difficult issues and contribute to libraries as needed.\n• A positive mindset and can-do attitude.\n• You’re constantly striving to learn new things and improve. You follow industry news, regularly tinker with new technologies, and read books and blogs to keep your skills current.\n• You work well within a team environment and enjoy working in a collaborative setting.\n• Ability to write well-documented, clean JavaScript or TypeScript code.\n• Experience working with GraphQL development\n• Experience developing with native iOS and/or Android SDKs\n• Experience working with third-party dependencies and debugging dependency conflicts.\n• Understanding of REST APIs.\n• Understanding of coding best practices and a commitment to following them.\n\nRequired Experience/ Top 5 Skills:\nReact Native: 2+ years\nJavaScript: 2+ years\nTypeScript: 1+ years\nSwift: 1+ years\nJava or Kotlin: 1+ year\nDesired Experience:\nNodeJS\nJava with Spring framework\n\nAbout the Company:\nYork Enterprise Solutions",
                "job_is_remote": false,
                "job_posted_at_timestamp": 1708041600,
                "job_posted_at_datetime_utc": "2024-02-16T00:00:00.000Z",
                "job_city": "Minneapolis",
                "job_state": "MN",
                "job_country": "US",
                "job_latitude": 44.977753,
                "job_longitude": -93.26501,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=S6NnCSDlnRFdz925AAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": null,
                "job_offer_expiration_timestamp": null,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": 12,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": null,
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": false,
                    "degree_mentioned": false,
                    "degree_preferred": false,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": null,
                "job_max_salary": null,
                "job_salary_currency": null,
                "job_salary_period": null,
                "job_highlights": {
                    "Qualifications": ["Ability to take ownership over your work", "A positive mindset and can-do attitude", "You’re constantly striving to learn new things and improve", "You follow industry news, regularly tinker with new technologies, and read books and blogs to keep your skills current", "Ability to write well-documented, clean JavaScript or TypeScript code", "Experience working with GraphQL development", "Experience developing with native iOS and/or Android SDKs", "Experience working with third-party dependencies and debugging dependency conflicts", "React Native: 2+ years", "JavaScript: 2+ years", "TypeScript: 1+ years", "Swift: 1+ years", "Java or Kotlin: 1+ year", "NodeJS"],
                    "Responsibilities": ["Develop, integrate, test, deploy, debug mobile software solutions", "Evaluate new software technologies (i.e., libraries, frameworks, services) that help development to stay abreast of industry trends and standards", "Take ownership of the software we build as a team, with a focus on delivering the best possible customer experience", "Contribute to the development of web-based experiences as needed", "Understanding of REST APIs", "Understanding of coding best practices and a commitment to following them"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4",
                "job_naics_code": "541512",
                "job_naics_name": "Computer Systems Design Services"
            }, {
                "employer_name": "Zencon Group",
                "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZgMtgId-KxltywWBrdIIb-oyzfJQlkccxi3r&s=0",
                "employer_website": null,
                "employer_company_type": null,
                "job_publisher": "LinkedIn",
                "job_id": "F401uMn3VbrBhuUeAAAAAA==",
                "job_employment_type": "CONTRACTOR",
                "job_title": "Front End React/React Native Developer",
                "job_apply_link": "https://www.linkedin.com/jobs/view/front-end-react-react-native-developer-at-zencon-group-3826748844",
                "job_apply_is_direct": false,
                "job_apply_quality_score": 0.6744,
                "apply_options": [{
                    "publisher": "LinkedIn",
                    "apply_link": "https://www.linkedin.com/jobs/view/front-end-react-react-native-developer-at-zencon-group-3826748844",
                    "is_direct": false
                }, {
                    "publisher": "ZipRecruiter",
                    "apply_link": "https://www.ziprecruiter.com/c/Zencon-Group/Job/Front-End-React-React-Native-Developer/-in-Minneapolis,MN?jid=f551911dca5ba82f",
                    "is_direct": true
                }],
                "job_description": "3 years React experience with 1 year React Native.\n3+ years of software dev experience\n2+ years programming with React Native\n1+ years of Java/Kotlin for Android dev\n1+ years of Swift for iOS dev\nAnd it says \"full stack” but shows Java or Node as \"nice to have”\n\nCan sit anywhere in U.S. but preferred hub city. Richfield MN or Seattle Washington.",
                "job_is_remote": false,
                "job_posted_at_timestamp": 1707920086,
                "job_posted_at_datetime_utc": "2024-02-14T14:14:46.000Z",
                "job_city": "Minneapolis",
                "job_state": "MN",
                "job_country": "US",
                "job_latitude": 44.977753,
                "job_longitude": -93.26501,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=F401uMn3VbrBhuUeAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": "2024-08-14T14:16:10.000Z",
                "job_offer_expiration_timestamp": 1723644970,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": 36,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": null,
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": true,
                    "degree_mentioned": false,
                    "degree_preferred": false,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": null,
                "job_max_salary": null,
                "job_salary_currency": null,
                "job_salary_period": null,
                "job_highlights": {
                    "Qualifications": ["3 years React experience with 1 year React Native", "3+ years of software dev experience", "2+ years programming with React Native", "1+ years of Java/Kotlin for Android dev", "1+ years of Swift for iOS dev"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113400",
                "job_onet_job_zone": "3"
            }, {
                "employer_name": "Upwork",
                "employer_logo": "https://image.status.io/z6aeO6kAGsAG.png",
                "employer_website": "http://www.elance.com",
                "employer_company_type": "Computer Services",
                "job_publisher": "Upwork",
                "job_id": "PeUjKF8nyJJlEFOaAAAAAA==",
                "job_employment_type": "CONTRACTOR",
                "job_title": "React Native Developer",
                "job_apply_link": "https://www.upwork.com/freelance-jobs/apply/React-Native-Developer_~0133f1b8cd419974b7/",
                "job_apply_is_direct": true,
                "job_apply_quality_score": 0.6855,
                "apply_options": [{
                    "publisher": "Upwork",
                    "apply_link": "https://www.upwork.com/freelance-jobs/apply/React-Native-Developer_~0133f1b8cd419974b7/",
                    "is_direct": true
                }],
                "job_description": "We are seeking an experienced React Native Developer to join our team and help us build and maintain high-quality mobile applications. The ideal candidate will have a strong background in React Native and a good understanding of JavaScript, HTML, and CSS. The developer will collaborate with the design and development teams to create efficient and effective code that meets project requirements. We are looking for someone who is detail-oriented, self-motivated, and able to work independently. The ability to handle multiple projects and meet tight deadlines is crucial.\n\nCompany is a young venture backed start up! Join us and let us build something great together\n\nSkills:\n\n- React Native\n\n- JavaScript\n\n- HTML\n\n- CSS",
                "job_is_remote": true,
                "job_posted_at_timestamp": 1708081785,
                "job_posted_at_datetime_utc": "2024-02-16T11:09:45.000Z",
                "job_city": null,
                "job_state": null,
                "job_country": "US",
                "job_latitude": 37.09024,
                "job_longitude": -95.71289,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=PeUjKF8nyJJlEFOaAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": null,
                "job_offer_expiration_timestamp": null,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": null,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": ["React Native", "Android", "JavaScript", "iOS", "Smartphone"],
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": false,
                    "degree_mentioned": false,
                    "degree_preferred": false,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": 8,
                "job_max_salary": 20,
                "job_salary_currency": "USD",
                "job_salary_period": "HOUR",
                "job_highlights": {
                    "Qualifications": ["The ideal candidate will have a strong background in React Native and a good understanding of JavaScript, HTML, and CSS", "We are looking for someone who is detail-oriented, self-motivated, and able to work independently", "The ability to handle multiple projects and meet tight deadlines is crucial"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4",
                "job_naics_code": "541511",
                "job_naics_name": "Custom Computer Programming Services"
            }, {
                "employer_name": "LanceSoft, Inc.",
                "employer_logo": "https://media.licdn.com/dms/image/C560BAQGdL6NTOB2wbw/company-logo_200_200/0/1630644159622/lancesoft_logo?e=2147483647&v=beta&t=vKkMXl0sQ0QlQQb9Oi77zKMNrzUAWLRnPefuhF7qlGY",
                "employer_website": "http://www.lancesoft.com",
                "employer_company_type": "Staffing",
                "job_publisher": "LinkedIn",
                "job_id": "jsCf8jjKvoBCIPoYAAAAAA==",
                "job_employment_type": "FULLTIME",
                "job_title": "React Native Developer",
                "job_apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-at-lancesoft-inc-3830213187",
                "job_apply_is_direct": false,
                "job_apply_quality_score": 0.6922,
                "apply_options": [{
                    "publisher": "LinkedIn",
                    "apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-at-lancesoft-inc-3830213187",
                    "is_direct": false
                }, {
                    "publisher": "Indeed",
                    "apply_link": "https://www.indeed.com/viewjob?jk=267f9d2249b5b644",
                    "is_direct": true
                }, {
                    "publisher": "Monster",
                    "apply_link": "https://www.monster.com/job-openings/react-native-developer-richfield-mn--d1ea2b3a-b658-47d0-8bdf-6dd9040011fb",
                    "is_direct": false
                }, {
                    "publisher": "Talentify",
                    "apply_link": "https://www.talentify.io/job/react-native-developer-richfield-minnesota-lancesoft-24-19315",
                    "is_direct": false
                }, {
                    "publisher": "SimplyHired",
                    "apply_link": "https://www.simplyhired.com/job/SydTMhMbdAVM9sgeqtZnSf23uJT-xLh0bmkvKzDXkmC6Wa7TxTHVyw",
                    "is_direct": false
                }, {
                    "publisher": "BeBee",
                    "apply_link": "https://us.bebee.com/job/20240209-58a509e9b9565cb44eac5f1e6bb6f826",
                    "is_direct": false
                }],
                "job_description": "Skills Overview\n\nWhat are the top five skills and number of years of experience required to perform this job?\n\nReact Native: 2+ years\n\nJavaScript: 2+ years\n\nTypeScript: 1+ years\n\nSwift: 1+ years\n\nJava or Kotlin: 1+ years\n\nWhat are some preferred/nice to have skills the manager is looking for?\n\nNodeJS\n\nJava with Spring framework\n\nPreferred Qualifications\n• 3+ years of relevant professional experience\n• 2+ years of experience with web app development\n\nPrescreening Questions\n\nPlease tell us about a recent project you did with React Native.",
                "job_is_remote": false,
                "job_posted_at_timestamp": 1707929656,
                "job_posted_at_datetime_utc": "2024-02-14T16:54:16.000Z",
                "job_city": "Richfield",
                "job_state": "MN",
                "job_country": "US",
                "job_latitude": 44.883297,
                "job_longitude": -93.283005,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=jsCf8jjKvoBCIPoYAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": "2024-03-15T16:54:15.000Z",
                "job_offer_expiration_timestamp": 1710521655,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": 36,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": null,
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": true,
                    "degree_mentioned": false,
                    "degree_preferred": false,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": null,
                "job_max_salary": null,
                "job_salary_currency": null,
                "job_salary_period": null,
                "job_highlights": {
                    "Qualifications": ["React Native: 2+ years", "JavaScript: 2+ years", "TypeScript: 1+ years", "Swift: 1+ years", "Java or Kotlin: 1+ years", "NodeJS", "Java with Spring framework"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4",
                "job_naics_code": "561311",
                "job_naics_name": "Employment Placement Agencies"
            }, {
                "employer_name": "Upwork",
                "employer_logo": "https://image.status.io/z6aeO6kAGsAG.png",
                "employer_website": "http://www.elance.com",
                "employer_company_type": "Computer Services",
                "job_publisher": "Upwork",
                "job_id": "NnevCZMhbhBFYu8iAAAAAA==",
                "job_employment_type": "CONTRACTOR",
                "job_title": "Mobile React Native Developer - Contract to Hire",
                "job_apply_link": "https://www.upwork.com/freelance-jobs/apply/Mobile-React-Native-Developer_~0181074cb8f0936ddf/",
                "job_apply_is_direct": true,
                "job_apply_quality_score": 0.6855,
                "apply_options": [{
                    "publisher": "Upwork",
                    "apply_link": "https://www.upwork.com/freelance-jobs/apply/Mobile-React-Native-Developer_~0181074cb8f0936ddf/",
                    "is_direct": true
                }],
                "job_description": "Job Title: Mobile React Native Developer\n\nJob Description:\n\nWe are looking for top-quality React Native developers for big web development projects. They will have to work with graphic designers and the product team. They should be talented Mobile React Native Developers with experience in building high-quality, user-friendly mobile applications. The ideal candidate should have experience with React Native and a solid understanding of APIs and web sockets.\n\nResponsibilities:\n\n•Responsible for building native apps using web and mobile technologies.\n\n• Design and develop mobile applications for both iOS and Android using React Native.\n\n• Work with APIs and web sockets to integrate real-time data into mobile applications.\n\n• Write clean, maintainable, and scalable code. Maintenance of the both Apps is one of the next responsibilities.\n\n• Collaborate with cross-functional teams to deliver high-quality mobile solutions.\n\n• Troubleshoot and debug mobile applications as needed.\n\nRequirements:\n\n• Strong experience in React Native development.\n\n• Able to perform mobile optimization, utilize native UI components for both iOS and Android platforms.\n\n• Has strong experience with accessing native modules i.e. (Camera, Geo location, sensors, etc.)\n\n• Experience with APIs and websockets.\n\n• Familiarity with Git and Agile software development methodologies.\n\n• Strong problem-solving skills.\n\n• Excellent communication and teamwork skills.\n\nEducation:\n\n• BS/MS in Computer Science or related field.\n\n• At least 5 years work experience as mobile developer\n\nIf you are passionate about mobile development and have a strong background in React Native, APIs, and websockets, we would love to hear from you!",
                "job_is_remote": true,
                "job_posted_at_timestamp": 1708106825,
                "job_posted_at_datetime_utc": "2024-02-16T18:07:05.000Z",
                "job_city": null,
                "job_state": null,
                "job_country": "US",
                "job_latitude": 37.09024,
                "job_longitude": -95.71289,
                "job_benefits": null,
                "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer&htidocid=NnevCZMhbhBFYu8iAAAAAA%3D%3D",
                "job_offer_expiration_datetime_utc": null,
                "job_offer_expiration_timestamp": null,
                "job_required_experience": {
                    "no_experience_required": false,
                    "required_experience_in_months": 60,
                    "experience_mentioned": true,
                    "experience_preferred": false
                },
                "job_required_skills": ["React Native"],
                "job_required_education": {
                    "postgraduate_degree": false,
                    "professional_certification": false,
                    "high_school": false,
                    "associates_degree": false,
                    "bachelors_degree": false,
                    "degree_mentioned": true,
                    "degree_preferred": true,
                    "professional_certification_mentioned": false
                },
                "job_experience_in_place_of_education": false,
                "job_min_salary": null,
                "job_max_salary": null,
                "job_salary_currency": null,
                "job_salary_period": null,
                "job_highlights": {
                    "Qualifications": ["They should be talented Mobile React Native Developers with experience in building high-quality, user-friendly mobile applications", "The ideal candidate should have experience with React Native and a solid understanding of APIs and web sockets", "Able to perform mobile optimization, utilize native UI components for both iOS and Android platforms", "Has strong experience with accessing native modules i.e. (Camera, Geo location, sensors, etc.)", "Experience with APIs and websockets", "Familiarity with Git and Agile software development methodologies", "Strong problem-solving skills", "Excellent communication and teamwork skills", "BS/MS in Computer Science or related field", "At least 5 years work experience as mobile developer", "If you are passionate about mobile development and have a strong background in React Native, APIs, and websockets, we would love to hear from you!"],
                    "Responsibilities": ["Responsible for building native apps using web and mobile technologies", "Design and develop mobile applications for both iOS and Android using React Native", "Work with APIs and web sockets to integrate real-time data into mobile applications", "Write clean, maintainable, and scalable code", "Maintenance of the both Apps is one of the next responsibilities", "Collaborate with cross-functional teams to deliver high-quality mobile solutions", "Troubleshoot and debug mobile applications as needed"]
                },
                "job_job_title": null,
                "job_posting_language": "en",
                "job_onet_soc": "15113200",
                "job_onet_job_zone": "4",
                "job_naics_code": "541511",
                "job_naics_name": "Custom Computer Programming Services"
            }]);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return {data, isLoading, error, refetch};
};

export default useFetch;
