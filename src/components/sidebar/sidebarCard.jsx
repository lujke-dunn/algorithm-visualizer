import PropTypes from 'prop-types';

export default function SidebarCard({title, icon}) { 
    return (
        <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
            <span className="text-blue-400">{icon}</span>
            <span className="font-medium">{title}</span>
        </div>
    );
}

SidebarCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
};
