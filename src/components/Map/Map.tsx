'use client';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Link from 'next/link';
import { rubik } from '@/pages/_app';
import { Event } from '@/types/Event';
import { Group } from '@/types/Group';
import styles from './Map.module.scss';

type MapProps = {
    groups: any[];
    selectedWeekday?: string;
};

const Map = ({ groups, selectedWeekday }: MapProps) => {
    const events = [];

    for (let i = 0; i < groups.length; i += 1) {
        if (groups[i].events) {
            for (let j = 0; j < groups[i].events.length; j += 1) {
                let event;

                event = groups[i].events[j];
                event.slug = groups[i].slug;
                event.name = groups[i].name;

                if (groups[i].events[j].location) {
                    if (
                        selectedWeekday &&
                        selectedWeekday !== 'All' &&
                        groups[i].events[j].time &&
                        groups[i].events[j].time.weekday !== selectedWeekday
                    ) {
                        // eslint-disable-next-line no-continue
                        continue;
                    }
                    events.push(event);
                }
            }
        }
    }

    const someGroupsHaveEventsWithoutLocation = groups.some(
        (group: Group) =>
            !group.events ||
            group.events.some((event: Event) => !event.location),
    );

    return (
        <div className={styles.container}>
            <MapContainer
                center={[51.456098, -2.596541]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {events.map((event: Event, index) => (
                    <Marker
                        key={index}
                        position={[
                            parseFloat(event.location.latitude),
                            parseFloat(event.location.longitude),
                        ]}
                    >
                        <Popup className={rubik.className}>
                            <p className={styles.popupTitle}>
                                <Link href={`/groups/${event.slug}`}>
                                    {event.name}
                                </Link>
                            </p>
                            <p className={styles.popupText}>
                                {event.location.address}
                            </p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            {someGroupsHaveEventsWithoutLocation && (
                <div className={styles.noLocationContainer}>
                    <p className={styles.noLocationTitle}>
                        Some groups host events without a regular location.
                    </p>
                    <p className={styles.noLocationDescription}>
                        These groups are not shown on the map but are still
                        listed below.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Map;
