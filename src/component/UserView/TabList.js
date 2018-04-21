import React from 'react';
import { Link } from 'react-router';
import { Tool } from '../../Tool';

/**
 * 发布的主题和回复的主题列表
 *
 * @class HomeList
 * @extends {Component}
 */

const TabList = ({list})=>(
    <ul className="list">
        {
            list.map((item, index) => {
                let {id, title, last_reply_at} = item;
                return (
                    <li key={index}>
                        <Link data-flex="box:last" to={`/topic/${id}`}>
                            <div className="tit">{title}</div>
                            <time>{Tool.formatDate(last_reply_at)}</time>
                        </Link>
                    </li>
                );
            })
        }
    </ul>
);


export default TabList;
