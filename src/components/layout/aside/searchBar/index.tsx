import Link from 'next/link';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { IAuth } from '../../../../interfaces/user';
import { RootState } from '../../../../redux/modules/reducer';
import { searchUserRequest } from '../../../../redux/modules/user';
import Avatar from '../../../common/Avatar';
import { Wrapper } from './style';

const SearchBar = () => {
    const { searchList } = useSelector((state: RootState) => state.user);

    const [search, onChangeSearch] = useInput('');
    const dispatch = useDispatch();

    const onSearch = useCallback(() => {
        if (search.length > 0) {
            dispatch(searchUserRequest(search));
        }
    }, [dispatch, search]);

    return (
        <Wrapper>
            <div className="searchBar">
                <div className="search">search</div>
                <input type="text" placeholder="검색" value={search} onChange={onChangeSearch} onKeyUp={onSearch} />
            </div>
            {searchList && (
                <div className="searchList">
                    {searchList.map((user: IAuth) => (
                        <Link key={user.id} href={`/user/${user.id}`}>
                            <div className="user">
                                <Avatar size={36} url={user.avatar} />
                                <span>{user.name}</span>
                            </div>
                        </Link>
                    ))}
                    <div>
                        <div className="icon-wrapper">
                            <div className="search-big" />
                        </div>
                        <span>{search}</span> 검색
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default SearchBar;
