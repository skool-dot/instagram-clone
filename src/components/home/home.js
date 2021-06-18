import React, { useState, useEffect } from 'react'

import Main from './main/main'
import Story from './story/story'
import Direct from './direct/direct'
import Notification from './notification/notification'

import useWindowDimensions from '../../hooks/screen'

export default function Home() {
    
    const { width, height } = useWindowDimensions();

    const UserInformation = [

        {
            id: 1,
            username: "neetu_prajapati",
            likes: 456 ,
            comment_no: 123 ,
            story_link: "https://images.unsplash.com/photo-1609372254316-029635bbabe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            comments: [
                {
                    id:11,
                    user:"kirti_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:21,
                    user:"kanagana_97",
                    comment: "Let me take a nap... great work, anyway."
                },
                {
                    id:31,
                    user:"akash_97",
                    comment: "It's fresh not just slick!"
                },
                {
                    id:41,
                    user:"royal_rumble_97",
                    comment: "I adore your camera angle m8"
                },
                {
                    id:51,
                    user:"skool_92836",
                    comment: "Just clean."
                },
                {
                    id:61,
                    user:"skool_pentesting",
                    comment: "Overly engaging style :-)"
                },
                {
                    id:71,
                    user:"justin_biber",
                    comment: "This work has navigated right into my heart."
                },
                {
                    id:81,
                    user:"modi",
                    comment: "My 25 year old grandson rates this shot very strong mate"
                },
                
            ],
            description: "Chocolate is a preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, which may also be used as a flavoring ingredient in other foods. ",
            link: "https://images.unsplash.com/photo-1581355707867-e6bbfdceace3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            username: "umesh_sahu",
            likes: 234,
            comment_no: 123,
            story_link: "https://images.unsplash.com/photo-1541682278521-2b1e654eb70b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN1cGVyaGVyb3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            comments: [
                {
                    id:12,
                    user:"kirti_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:22,
                    user:"kanagana_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:32,
                    user:"akash_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:42,
                    user:"royal_rumble_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
            ],
            description: "When choosing between color and colour, keep in mind that both spellings are correct. The shorter one, color, is the preferred spelling in the United States. The rest of the English-speaking world uses the longer form, colour.",
            link: "https://images.unsplash.com/photo-1566986139502-445e8beb2a79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3VsdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            username: "deepu_meena",
            likes: 132,
            comment_no: 12,
            story_link: "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=635&q=80",
            comments: [
                {
                    id:13,
                    user:"kirti_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:23,
                    user:"kanagana_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:33,
                    user:"akash_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:43,
                    user:"royal_rumble_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
            ],
            description: "Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes. It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength. ",
            link: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=499&q=80"
        },
        {
            id: 4,
            username: "shivam_singh",
            likes: 123,
            comment_no:  234,
            story_link: "https://images.unsplash.com/photo-1611567798785-dc07e90a6b7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            comments: [
                {
                    id:14,
                    user:"kirti_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:24,
                    user:"kanagana_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:34,
                    user:"akash_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:44,
                    user:"royal_rumble_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
            ],
            description: "Photographers who produce moving rather than still pictures are often called cinematographers, videographers or camera operators, depending on the commercial context. The term professional may also imply preparation, for example, by academic study or apprenticeship by the photographer in pursuit of photographic skills.",
            link: "https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            username: "happhy_kahlon",
            likes: 234,
            comment_no: 234 ,
            story_link: "https://images.unsplash.com/photo-1572883023704-baadd8d6a976?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            comments: [
                {
                    id:15,
                    user:"kirti_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:25,
                    user:"kanagana_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:35,
                    user:"akash_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:45,
                    user:"royal_rumble_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
            ],
            description: "Kahlon - The Kahlon are found mainly in Sialkot, Gurdaspur and Amritsar Districts. They are now scattered throughout central Punjab. According to 1911 census the Kahlon were the principal Muslim Jat clan in districts: Sialkot District - Kahlon (6,285)",
            link: "https://images.unsplash.com/photo-1616879672490-c6d3a23d91f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            username: "sher_singh",
            likes: 234,
            comment_no:  345,
            story_link: "https://images.unsplash.com/photo-1562080411-a1afc4016a64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=665&q=80",
            comments: [
                {
                    id:16,
                    user:"kirti_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:26,
                    user:"kanagana_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:36,
                    user:"akash_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:46,
                    user:"royal_rumble_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
            ],
            description: "The lion is a large felid of the genus Panthera native mainly to Africa. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane.",
            link: "https://images.unsplash.com/photo-1582428430469-1be51e3b4e7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=538&q=80"
        },
        {
            id: 7,
            username: "pentesting_skool",
            likes: 456,
            comment_no:  123,
            story_link: "https://images.unsplash.com/photo-1529530385195-5f7be6bb3d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
            comments: [
                {
                    id:17,
                    user:"kirti_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:27,
                    user:"kanagana_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:37,
                    user:"akash_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
                {
                    id:47,
                    user:"royal_rumble_97",
                    comment: "you like chocolate, i like chocolate, we both like chocolates !!"
                },
            ],
            description: "A computer hacker is a computer expert who uses their technical knowledge to achieve a goal or overcome an obstacle, within a computerized system by non-standard means.",
            link: "https://images.unsplash.com/photo-1614097398045-2c72a65b7980?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8MnwwfGJsYWNrX2FuZF93aGl0ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
    ]
    
    
    return (
        <div className={ width >= 1024 ? "d-flex flex-row" : null } style={{ marginTop:"67px", height:"100%" }} >
            
            <div className="" >
                <div style={{ overflowY:"auto", height: (height - 67) }} className="column m-2 hide-scroll">

                <Story storyCollection={UserInformation} />

                <Main postCollection={UserInformation} />    

                </div>
            </div>

            <div>
                { width > 1024 ? 
                
                <div className="column m-2">

                    <Direct/>
                    <Notification/>

                </div>
                
                : null }
            </div>

        </div>
    )
}


 