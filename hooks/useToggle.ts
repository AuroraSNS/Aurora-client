import { useState, useCallback } from 'react';

const useToggle = (initValue: boolean) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e: any) => {
        setter((prev) => !prev);
    }, []);
    return [value, handler, setter] as const;
};

export default useToggle;
