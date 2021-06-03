import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollContainer from 'react-indiana-drag-scroll';
import { OrganizationMin } from '../types';

interface Props {
  organization: OrganizationMin;
}

export function Item({ organization }: Props) {
  return (
    <Link href={`/org/${organization.slug}`}>
      <a>
        <div className="bg-white p-4 rounded filter drop-shadow-xl hover:drop-shadow-2xl transition-all">
          <div className="grid grid-cols-3">
            <div>
              <Image
                src={organization.logoUrl}
                alt={organization.name}
                width={132}
                height={132}
              />
            </div>
            <div className="col-span-2 ml-4">
              <h3 className="text-lg text-black">{organization.name}</h3>

              <div className="text-sm text-gray-400 mb-4">
                {organization.country}
              </div>

              <div className="text-xs text-gray-400">
                Causas o comunidades con las que trabajan
              </div>

              <ScrollContainer
                vertical={false}
                className="flex flex-nowrap overflow-hidden mb-4"
              >
                {organization.causes.map((cause) => (
                  <div
                    key={cause.id}
                    className="px-[5px] py-[1px] text-xs text-gray-400 border border-solid border-gray-200 mr-1 min-w-[fit-content]"
                  >
                    {cause.name}
                  </div>
                ))}
              </ScrollContainer>

              <div className="flex justify-end">
                <div className="text-xs fill-current text-blue-500 uppercase flex items-center">
                  Ir al perfil
                  <svg viewBox="0 0 511.993 511.993" className="w-2 ml-2">
                    <path d="M487.292 235.408H20.59c-11.372 0-20.59 9.224-20.59 20.59s9.217 20.59 20.59 20.59h466.702c11.372 0 20.59-9.217 20.59-20.59s-9.217-20.59-20.59-20.59z" />
                    <path d="M505.96 241.434L304.187 39.653c-8.044-8.037-21.07-8.037-29.114 0-8.044 8.044-8.044 21.084 0 29.121l187.216 187.223-187.216 187.224c-8.044 8.037-8.044 21.077 0 29.114 4.022 4.022 9.286 6.033 14.557 6.033s10.535-2.011 14.557-6.033l201.773-201.78c8.044-8.044 8.044-21.085 0-29.121z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
