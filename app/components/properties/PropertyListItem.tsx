"use client";
import { Card } from "flowbite-react";


export default function PropertyListItem() {
    return (
        <Card
            className="max-w-sm mb-10 mr-10 w-1/5"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/assets/property_item.jpg"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Property title
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Property price: $100
            </p>
        </Card>
    )
}
