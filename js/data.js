
const newsData = [
    {
        id: 1,
        category: "Politics",
        author: "Sagar K.C.",
        title: "Election Commission Finalizes 19 Million Voters for March Elections",
        date: "Feb 7, 2026",
        excerpt: "The Commission has ensured high-tech monitoring to manage the surge in youth voter turnout...",
        image: "assets/images/election-nepal.jpg",
        content: "Kathmandu: The Election Commission of Nepal has officially closed the voter registration for the upcoming March 2026 General Elections. With a record-breaking 52% of the electorate being under the age of 40, the 'Youth Wave' is expected to redefine the political landscape. Commission officials stated that digital biometric verification has been implemented across all 77 districts to ensure a fair voting process. This election marks the largest logistical undertaking in the country's democratic history. Security measures have been doubled, and international observers from twenty countries have already confirmed their attendance to witness this digital transition in Nepal's democracy."
    },
    {
        id: 2,
        category: "Economy",
        author: "Prerana Thapa",
        title: "Nepal Roadmap for Jobs and Social Protection Finalized",
        date: "Feb 6, 2026",
        excerpt: "A new strategy aims to reduce youth migration by creating 200,000 local tech and agriculture jobs...",
        image: "assets/images/economy-nepal.jpg",
        content: "The National Planning Commission, in coordination with international partners, has validated a 5-year roadmap focusing on inclusive economic growth. The plan involves a $500 million investment into domestic manufacturing and sustainable agriculture. By providing low-interest loans to startups, the government expects to retain skilled youth who currently seek employment in the Gulf and East Asia. This roadmap is a cornerstone for the 2030 development goals. Economists suggest that if the implementation remains on schedule, Nepal's GDP growth could stabilize at a healthy 7.5% annually, driven primarily by domestic production rather than remittances."
    },
    {
        id: 3,
        category: "Sports",
        author: "Amrit Luintel",
        title: "Nepal Rhinos Depart for T20 World Cup 2026",
        date: "Feb 7, 2026",
        excerpt: "Thousands gather at TU Ground to bid farewell to the national cricket team...",
        image: "assets/images/cricket-nepal.jpg",
        content: "The Nepali National Cricket team has departed for the 2026 T20 World Cup. Captain Rohit Paudel stated the team is in its best-ever form. Fans lined the streets from Kirtipur to the Airport, waving flags and chanting 'Gorkhali Pride.' The team has spent the last three months training in high-altitude camps and playing international friendlies. Their first match is scheduled against South Africa in Mumbai. This tournament is seen as a turning point for Nepali cricket, with scouts from major T20 leagues worldwide keeping a close eye on Nepal’s young spin-bowling sensations."
    },
    {
        id: 4,
        category: "Tech",
        author: "Bibek Shrestha",
        title: "Kathmandu Valley to Launch Smart Traffic Management System",
        date: "Feb 7, 2026",
        excerpt: "AI-powered cameras will now regulate the flow of traffic in the capital's major junctions...",
        image: "",
        content: "The Metropolitan Traffic Police Division is set to switch on an AI-driven traffic light system across the Kathmandu Valley. These advanced cameras analyze vehicle density in real-time and adjust lights to minimize congestion automatically. Residents hope this will finally solve the gridlock issues at Koteshwor and Kalanki. The system also includes automated fine generation for lane violations and over-speeding, integrated with the 'Nagarik App.' Experts believe this move could reduce average commute times by 30% during peak rush hours, significantly lowering the carbon footprint of the city."
    },
    {
        id: 5,
        category: "Environment",
        author: "Dawa Sherpa",
        title: "Rare Red Panda Sighted in Upper Manang Region",
        date: "Feb 6, 2026",
        excerpt: "Local conservationists capture high-quality footage of the elusive species...",
        image: "",
        content: "A group of researchers from the Annapurna Conservation Area Project (ACAP) spotted a red panda mother and her cub in the dense bamboo thickets of Upper Manang. This sighting confirms that conservation efforts in the trans-Himalayan region are working. Community-based protection programs, which involve local herders as wildlife guardians, have been credited for the habitat's recovery. The footage captured will be used for further study into the breeding patterns of these endangered animals. Environmentalists are calling for stricter regulations on tourism trekking routes to ensure these sensitive habitats remain undisturbed during the peak spring season."
    },
    {
        id: 6,
        category: "Business",
        author: "Manish Adhikari",
        title: "NEPSE Hits All-Time High Amidst Hydropower Surge",
        date: "Feb 5, 2026",
        excerpt: "Stock market sentiment turns bullish as energy companies report record profits...",
        image: "",
        content: "The Nepal Stock Exchange (NEPSE) index crossed the 3,500 mark today, fueled by an unprecedented rally in the hydropower sector. Financial analysts point to the recently signed electricity trade agreement with India and Bangladesh as the primary driver. Investors are particularly focused on Upper Tamakoshi and other mega projects that have started exporting surplus power. The market's daily turnover also reached a record high of 25 billion rupees. Market regulators have advised small investors to remain cautious and look at fundamental strengths rather than following speculative trends, although the overall sentiment remains overwhelmingly positive."
    },
    {
        id: 7,
        category: "Tourism",
        author: "Sita Gurung",
        title: "Pokhara International Airport Receives First Direct Flight from Tokyo",
        date: "Feb 5, 2026",
        excerpt: "A major boost for tourism in Gandaki Province as Japanese travelers arrive directly...",
        image: "",
        content: "The tourism industry in Pokhara is celebrating a milestone today. The first direct charter flight from Narita Airport, Tokyo, landed this afternoon carrying 180 tourists. This direct link is expected to increase the high-spending Japanese demographic in the Annapurna trekking circuit. Local hoteliers have reported a 40% surge in bookings for the coming autumn. The Civil Aviation Authority is currently in talks with other major Asian hubs like Seoul and Beijing to establish similar direct routes. This expansion is part of the 'Visit Nepal 2026' campaign, which aims to bring 2.5 million tourists into the country."
    },
    {
        id: 8,
        category: "Culture",
        author: "Rabina Bajracharya",
        title: "Maha Shivaratri Preparations in Full Swing at Pashupatinath",
        date: "Feb 4, 2026",
        excerpt: "Sadhus and devotees from across South Asia begin arriving in Kathmandu...",
        image: "",
        content: "The Pashupati Area Development Trust (PADT) has finalized security and accommodation for the upcoming festival of Maha Shivaratri. Over 1.5 million devotees are expected this year. Special medical camps, free meal centers, and 24-hour water stations have been set up throughout the temple complex. The Bagmati river bank has been specially cleaned for the ritual baths. Volunteers from various youth clubs and the Nepal Scouts have been mobilized to manage the crowds. The trust has also introduced a 'QR-based Darshan System' to reduce waiting times for the main temple entry, blending ancient tradition with modern technology."
    },
    {
        id: 9,
        category: "Health",
        author: "Dr. Sandip Pandey",
        title: "Government Launches Nationwide Cervical Cancer Vaccination Drive",
        date: "Feb 4, 2026",
        excerpt: "Targeting school-going girls to eliminate the risk of the disease...",
        image: "",
        content: "The Ministry of Health has begun distributing the HPV vaccine to girls aged 9-14 across all provinces. This free program is part of a global effort to reduce reproductive health issues. Health workers are visiting both public and private schools to ensure 100% coverage. The campaign also includes community awareness sessions to debunk myths regarding vaccinations. According to the Health Secretary, the goal is to make Nepal cervical cancer-free by 2040. International health organizations have lauded Nepal's efficient cold-chain management system, which was perfected during the previous pandemic response efforts."
    },
    {
        id: 10,
        category: "Education",
        author: "Kiran Rimal",
        title: "Tribhuvan University Moves to Fully Digital Result System",
        date: "Feb 3, 2026",
        excerpt: "No more waiting in lines for marks sheets as the university adopts blockchain technology...",
        image: "",
        content: "In a bid to modernize its administration, Tribhuvan University (TU) has launched a digital portal for transcripts and mark sheets. Students can now download verified copies within 48 hours of result publication. This move is aimed at reducing administrative delays and eliminating the possibility of certificate forgery through blockchain-based verification. The Vice-Chancellor stated that this is the first step toward a completely paperless university system. Current students can access their entire academic history through a secure login, while alumni can request digital upgrades of their old records through the same interface."
    },
    {
        id: 11,
        category: "Infrastructure",
        author: "Anil Magar",
        title: "Fast Track Tunnel Construction Reaches 80% Completion",
        date: "Feb 3, 2026",
        excerpt: "The Kathmandu-Nijgadh expressway enters its final phase of development...",
        image: "",
        content: "The Nepal Army, which is overseeing the Kathmandu-Terai Fast Track project, announced that the major tunnel sections near Dhedre and Mahadevtar are nearly finished. Once operational, the travel time from Kathmandu to the Terai will be reduced to under an hour, revolutionizing logistics and trade in the country. The project has faced several geological challenges, but engineers have successfully implemented modern tunneling technology to overcome them. The expressway is expected to handle over 10,000 vehicles daily, significantly easing the pressure on the existing Nagdhunga-Muglin highway and lowering transport costs for essential goods."
    },
    {
        id: 12,
        category: "Agriculture",
        author: "Gopal Paudel",
        title: "Orange Farmers in Gulmi Report Bumper Harvest",
        date: "Feb 2, 2026",
        excerpt: "Better pest control and favorable weather lead to record production...",
        image: "",
        content: "Farmers in the western hills of Gulmi are seeing a 25% increase in orange yields this season. The local agriculture cooperative has already exported three truckloads of high-quality fruit to India and Tibet. The government is currently building a mega-cold storage facility in the district to prevent post-harvest losses and allow farmers to sell their produce during off-seasons when prices are higher. Agriculture experts attribute this success to the integrated pest management training provided to farmers last year. The success in Gulmi is now being used as a model for orange-growing regions in Gorkha and Syangja."
    },
    {
        id: 13,
        category: "Opinion",
        author: "Aryan Neupane",
        title: "The Future of Digital Nomadism in the Himalayas",
        date: "Feb 2, 2026",
        excerpt: "Why Nepal is becoming the next top destination for global remote workers...",
        image: "",
        content: "With high-speed internet now reaching remote villages like Ghandruk and Namche through satellite technology, digital nomads are flocking to Nepal. The combination of low cost of living, work-friendly visa policies, and breathtaking landscapes makes it an ideal location for remote workers. Local businesses are adapting by offering co-working spaces and nomad-friendly accommodations. However, this influx also raises concerns about cultural preservation and environmental sustainability. As the government considers implementing a 'Digital Nomad Visa,' it must balance economic benefits with the need to protect Nepal's unique heritage and fragile ecosystems."
    }
];