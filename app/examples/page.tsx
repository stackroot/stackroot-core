
'use client';

import React, { useState } from 'react';

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent
} from '@/components/ui/card';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const data = [
    {
        "id": 1,
        "title": "Playground",
        "description": "This is a playground page where you can test various features.",
        "createdAt": "2023-10-01T12:00:00Z"
    },
    {
        "id": 2,
        "title": "Example Feature",
        "description": "An example feature to demonstrate functionality.",
        "createdAt": "2023-10-02T12:00:00Z"
    },
    {
        "id": 3,
        "title": "Another Feature",
        "description": "Another feature to showcase capabilities.",
        "createdAt": "2023-10-03T12:00:00Z"
    },
    {
        "id": 4,
        "title": "Latest Feature",
        "description": "The latest feature added to the playground.",
        "createdAt": "2023-10-04T12:00:00Z"
    },
    {
        "id": 5,
        "title": "Upcoming Feature",
        "description": "A sneak peek of an upcoming feature.",
        "createdAt": "2023-10-05T12:00:00Z"
    }
]

const names = [
    "alice",
    "bob",
    "charlie",
    "dave",
    "eve",
    "frank",
    "grace",
    "dave",
    "bob",
]

export default function ExamplesPage() {
    const [order, setOrder] = useState('latest');
    const [filter, setFilter] = useState('all');

    const filteredData = data.filter(item => {
        if (filter === 'all') return true;
        if (filter === 'feature') return item.title.toLowerCase().includes('feature');
        if (filter === 'example') return item.title.toLowerCase().includes('example');
        return true;
    });

    const sortedData = [...filteredData].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return order === 'latest' ? dateB - dateA : dateA - dateB;
    });

    console.log('some', sortedData.some(item => item.title === 'Playground')); // true
    
    
    const nameSet = new Set(names);
    console.log('Does the set have "alice"?', nameSet.has('alice')); // true
    console.log('Does the set have "zara"?', nameSet.has('zara')); // false


    const unique = [...new Set(names)];
    console.log('Unique Data:', unique); // ["alice", "bob", "charlie", "dave", "eve", "frank", "grace"]
    console.log(unique.length); // 7
    console.log(unique.includes('alice')); // true
    console.log(unique.indexOf('dave')); // 3

    console.log(unique.some(name => name === 'alice')); // true

    return (
        <>
            <div id="about" className="min-h-[70vh] max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-18">
                <h2 className="text-2xl md:text-4xl font-root mb-6 text-sky-700">Examples</h2>
                <div className="flex justify-end mb-4">
                    <Select
                        defaultValue="latest"
                        onValueChange={(e) => {
                            setOrder(e);
                        }}>
                        <SelectTrigger className="w-48">
                            <SelectValue placeholder="Order by" />
                        </SelectTrigger>
                        <SelectContent>

                            <SelectItem value="latest">Latest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select
                        defaultValue="all"
                        onValueChange={(e) => {
                            setFilter(e);
                        }}>
                        <SelectTrigger className="w-48 ml-4">
                            <SelectValue placeholder="Filter by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="feature">Feature</SelectItem>
                            <SelectItem value="example">Example</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sortedData.map(item => (
                        <Card key={item.id} className="shadow-lg">
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Created at: {new Date(item.createdAt).toLocaleString()}</p>
                            </CardContent>
                            <CardFooter>
                                <CardAction>Action</CardAction>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}